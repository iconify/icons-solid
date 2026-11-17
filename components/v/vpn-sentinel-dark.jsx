import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwv2d3bhh.css';
import '../../css/l/lrqqa_b2z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zwv2d3bhh"/><path class="lrqqa_b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vpn-sentinel-dark"} {...others} />);
}

export default Component;
