import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6j13pbkr.css';
import '../../css/a/a8vjpobae.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="l6j13pbkr"/><path class="a8vjpobae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:trash-1-duo"} {...others} />);
}

export default Component;
