import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5sn11bpb.css';
import '../../css/w/w6kke-lrd.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="i5sn11bpb"/><path class="w6kke-lrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-box-double-fill-12"} {...others} />);
}

export default Component;
