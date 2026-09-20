import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qi30vz44o.css';
import '../../css/e/ehgxs22fz.css';
import '../../css/h/hq7o26lao.css';
import '../../css/o/o1x490v7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qi30vz44o"/><path class="ehgxs22fz"/><path class="hq7o26lao"/><path class="o1x490v7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-broken"} {...others} />);
}

export default Component;
