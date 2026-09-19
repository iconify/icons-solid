import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p7qo25lsm.css';
import '../../css/d/dggtwlu_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p7qo25lsm"/><path class="dggtwlu_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sun-cloud-angled-zap-01"} {...others} />);
}

export default Component;
