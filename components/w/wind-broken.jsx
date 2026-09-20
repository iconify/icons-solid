import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g5i18qe1o.css';
import '../../css/c/ca0i9ubof.css';
import '../../css/v/vrm2ribsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g5i18qe1o"/><path class="ca0i9ubof"/><path class="vrm2ribsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wind-broken"} {...others} />);
}

export default Component;
