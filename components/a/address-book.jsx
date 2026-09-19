import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t68u_vbpr.css';
import '../../css/c/cs3fob1lr.css';
import '../../css/w/wfz41fcby.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t68u_vbpr"/><path class="cs3fob1lr"/><path class="wfz41fcby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:address-book"} {...others} />);
}

export default Component;
