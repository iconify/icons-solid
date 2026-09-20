import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h37qctsio.css';
import '../../css/x/xzdkyp4ub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="h37qctsio"/><path class="xzdkyp4ub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:email"} {...others} />);
}

export default Component;
