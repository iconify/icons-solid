import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y35c8wdas.css';
import '../../css/h/hqvwm-e6q.css';
import '../../css/u/unjd7ud_q.css';
import '../../css/u/uoxdxxbbs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y35c8wdas"/><rect class="hqvwm-e6q"/><path class="unjd7ud_q"/><path class="uoxdxxbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rv-bold"} {...others} />);
}

export default Component;
