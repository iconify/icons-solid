import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k4ialmxqs.css';
import '../../css/i/ihtlpugbo.css';
import '../../css/w/wh_7-zbzo.css';
import '../../css/b/bdw1r4b6v.css';
import '../../css/d/dfx-lljpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k4ialmxqs"/><path class="ihtlpugbo"/><path class="wh_7-zbzo"/><path class="bdw1r4b6v"/><path class="dfx-lljpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-small-line-duotone"} {...others} />);
}

export default Component;
