import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x08mp2bej.css';
import '../../css/i/isch7z0wf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="x08mp2bej"/><path class="isch7z0wf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:center-focus-strong-duo"} {...others} />);
}

export default Component;
