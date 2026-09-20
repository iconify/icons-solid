import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u7mrcgb5f.css';
import '../../css/s/sp_jcmb7x.css';
import '../../css/q/q3858wbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u7mrcgb5f"/><path class="sp_jcmb7x"/><path class="q3858wbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-navigation-linear"} {...others} />);
}

export default Component;
