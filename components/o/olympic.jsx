import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e68szxm0m.css';
import '../../css/f/fsglu31hn.css';
import '../../css/x/xif-kjbfq.css';
import '../../css/o/owl7p-72p.css';
import '../../css/a/a8dl8_b5u.css';
import '../../css/t/tn-7aghlb.css';
import '../../css/f/fwvwv_hko.css';
import '../../css/m/m-wfbk1-d.css';
import '../../css/h/h4rytqblp.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="e68szxm0m"/><path class="fsglu31hn"/><path class="xif-kjbfq"/><path class="owl7p-72p"/><path class="a8dl8_b5u"/><path class="tn-7aghlb"/><path class="fwvwv_hko"/><path class="m-wfbk1-d"/><path class="h4rytqblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:olympic"} {...others} />);
}

export default Component;
