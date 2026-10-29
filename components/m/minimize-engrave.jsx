import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w55-sjbzg.css';
import '../../css/j/jjh8m7o_m.css';
import '../../css/i/itj0unbfd.css';
import '../../css/v/vw2d3v36t.css';
import '../../css/g/gjffvyjta.css';
import '../../css/z/z2cmsqfjo.css';
import '../../css/m/m8z7zkbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w55-sjbzg wm-k"/><path class="jjh8m7o_m wm-a"/><path class="itj0unbfd wm-shadow"/><path class="vw2d3v36t wm-k"/><path class="gjffvyjta wm-a"/><path class="wm-k z2cmsqfjo"/><path class="m8z7zkbik wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minimize-engrave"} {...others} />);
}

export default Component;
