import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq6x_qc-w.css';
import '../../css/d/d2omkm1_w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dq6x_qc-w"/><path class="d2omkm1_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:piggy-bank-48-bold"} {...others} />);
}

export default Component;
