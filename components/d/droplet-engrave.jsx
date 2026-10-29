import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zga537btf.css';
import '../../css/t/tue7ke1ug.css';
import '../../css/b/b8357wzya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zga537btf"/><path class="tue7ke1ug wm-shadow"/><path class="b8357wzya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:droplet-engrave"} {...others} />);
}

export default Component;
