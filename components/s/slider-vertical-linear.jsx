import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v8oc18bcm.css';
import '../../css/u/u4slpgvma.css';
import '../../css/h/h10et9qty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v8oc18bcm"/><path class="u4slpgvma"/><path class="h10et9qty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-linear"} {...others} />);
}

export default Component;
