import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ymdqawbsc.css';
import '../../css/g/gt-sgqbuw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ymdqawbsc"/><path class="gt-sgqbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:microphone-slash-duo"} {...others} />);
}

export default Component;
