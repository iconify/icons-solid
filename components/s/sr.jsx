import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7sy86bue.css';
import '../../css/o/ourbp8-tv.css';
import '../../css/u/u623cosgu.css';
import '../../css/y/yevzmiaai.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="a7sy86bue"/><path class="ourbp8-tv"/><path class="u623cosgu"/><path class="yevzmiaai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sr"} {...others} />);
}

export default Component;
