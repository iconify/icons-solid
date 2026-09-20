import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5buxdvyt.css';
import '../../css/o/objm-ccgw.css';
import '../../css/w/w_5g2gbpt.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="z5buxdvyt"/><path class="objm-ccgw"/><path class="w_5g2gbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cogs"} {...others} />);
}

export default Component;
