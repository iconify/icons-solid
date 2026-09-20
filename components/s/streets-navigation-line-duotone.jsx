import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qgtd8187v.css';
import '../../css/u/u7mrcgb5f.css';
import '../../css/f/fbtujzbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qgtd8187v"/><path class="u7mrcgb5f"/><path class="fbtujzbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-navigation-line-duotone"} {...others} />);
}

export default Component;
