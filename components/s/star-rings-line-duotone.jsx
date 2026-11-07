import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k1cjlz8kf.css';
import '../../css/e/ea230sxql.css';
import '../../css/n/njjolibwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k1cjlz8kf"/><path class="ea230sxql"/><path class="njjolibwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rings-line-duotone"} {...others} />);
}

export default Component;
