import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_y25wbci.css';
import '../../css/q/qmig79b_v.css';
import '../../css/x/x3dt49afq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_y25wbci"/><path class="qmig79b_v"/><path class="x3dt49afq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-horizontal-bold"} {...others} />);
}

export default Component;
