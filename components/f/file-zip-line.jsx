import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_1b8nblp.css';
import '../../css/f/f1hn2jksy.css';
import '../../css/u/u7x_sfdvd.css';
import '../../css/m/mrr2zibtv.css';
import '../../css/p/p4gt2tlzi.css';
import '../../css/h/hv6l12buq.css';
import '../../css/v/vy3qhubuz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 e_1b8nblp"/><path class="clr-i-outline clr-i-outline-path-2 f1hn2jksy"/><path class="clr-i-outline clr-i-outline-path-3 u7x_sfdvd"/><path class="clr-i-outline clr-i-outline-path-4 mrr2zibtv"/><path class="clr-i-outline clr-i-outline-path-5 p4gt2tlzi"/><path class="clr-i-outline clr-i-outline-path-6 hv6l12buq"/><path class="clr-i-outline clr-i-outline-path-7 vy3qhubuz"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:file-zip-line"} {...others} />);
}

export default Component;
