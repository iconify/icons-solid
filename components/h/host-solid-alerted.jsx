import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb-1labtg.css';
import '../../css/h/hfcvhcccg.css';
import '../../css/y/yiybycb-p.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="wb-1labtg"/><path class="hfcvhcccg"/><path class="yiybycb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:host-solid-alerted"} {...others} />);
}

export default Component;
