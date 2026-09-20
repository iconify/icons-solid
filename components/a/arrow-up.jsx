import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cev2_hbmk.css';
import '../../css/i/iotdvhbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cev2_hbmk"/><path class="iotdvhbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-up"} {...others} />);
}

export default Component;
