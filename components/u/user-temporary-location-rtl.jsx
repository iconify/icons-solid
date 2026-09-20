import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saqybxb0m.css';
import '../../css/h/hr6f-e6aq.css';
import '../../css/u/ub8xjbcqz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="saqybxb0m"/><path class="hr6f-e6aq"/><circle class="ub8xjbcqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-temporary-location-rtl"} {...others} />);
}

export default Component;
