import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wekqacc_i.css';
import '../../css/s/s-8cdb7kg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="wekqacc_i"/><path class="s-8cdb7kg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:exclamation-hexagon"} {...others} />);
}

export default Component;
