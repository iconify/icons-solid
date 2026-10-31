import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/afxhqj_bi.css';
import '../../css/s/sjrxxibyh.css';
import '../../css/h/hknb5ny6g.css';
import '../../css/u/u5dih_boo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="afxhqj_bi wm-shadow"/><path class="sjrxxibyh"/><path class="hknb5ny6g"/><path class="u5dih_boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cookie"} {...others} />);
}

export default Component;
