import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hcsdoz9wp.css';
import '../../css/q/qnr5tyb9v.css';
import '../../css/u/ueanm_bbq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="hcsdoz9wp"/><path class="qnr5tyb9v"/><path class="ueanm_bbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:receipt-cross"} {...others} />);
}

export default Component;
