import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh8c69u5a.css';
import '../../css/v/vbtn2cchy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="sh8c69u5a"/><path class="vbtn2cchy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:align-items-side-duo"} {...others} />);
}

export default Component;
