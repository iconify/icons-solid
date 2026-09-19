import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox5bagm_m.css';
import '../../css/p/pa14hnb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox5bagm_m"/><path class="pa14hnb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clipboard-plus"} {...others} />);
}

export default Component;
