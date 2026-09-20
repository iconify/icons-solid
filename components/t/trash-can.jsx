import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srd7lnbfg.css';
import '../../css/w/waqnvi5sy.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="srd7lnbfg"/><path class="waqnvi5sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:trash-can"} {...others} />);
}

export default Component;
