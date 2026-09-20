import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks99qt2hl.css';
import '../../css/e/eh8-ivaqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ks99qt2hl"/><path class="eh8-ivaqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:step-backward"} {...others} />);
}

export default Component;
