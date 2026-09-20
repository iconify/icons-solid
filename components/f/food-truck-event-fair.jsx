import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pd2_l2isv.css';
import '../../css/h/hxvypohgj.css';
import '../../css/r/rkwz2wbcb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="pd2_l2isv"/><path class="hxvypohgj"/><path class="rkwz2wbcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:food-truck-event-fair"} {...others} />);
}

export default Component;
