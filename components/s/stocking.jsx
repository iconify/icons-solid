import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hw9_m3m1v.css';
import '../../css/a/al7lgrbhe.css';
import '../../css/c/cnqhwmi6w.css';
import '../../css/j/jfv_pmbql.css';
import '../../css/x/xpe4oo__z.css';
import '../../css/l/l7b397b0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hw9_m3m1v wm-shadow"/><path class="al7lgrbhe"/><path class="cnqhwmi6w"/><path class="jfv_pmbql"/><path class="xpe4oo__z"/><path class="l7b397b0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:stocking"} {...others} />);
}

export default Component;
