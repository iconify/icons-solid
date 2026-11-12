import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5ku-ztwy.css';
import '../../css/i/ib2bxjbcn.css';
import '../../css/m/ma62eabge.css';
import '../../css/a/aqp8o2-2p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5ku-ztwy"/><path class="ib2bxjbcn"/><path class="ma62eabge"/><path class="aqp8o2-2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homescreen-hero-dark"} {...others} />);
}

export default Component;
