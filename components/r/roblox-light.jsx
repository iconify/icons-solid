import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss-jg4l0d.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ako062w7u.css';

const viewBox = {"width":564,"height":115};
const content = `<mask id="SVGVngcvcMx" width="512" height="95" x="26" y="10" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="ss-jg4l0d"/></mask><g mask="url(#SVGVngcvcMx)" class="ft5dv1b6b"><path class="ako062w7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:roblox-light"} {...others} />);
}

export default Component;
