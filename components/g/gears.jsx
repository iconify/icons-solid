import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2eg8ec2k.css';
import '../../css/r/rr7aclb4v.css';
import '../../css/n/nngyw5bfh.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="g2eg8ec2k"/><path class="rr7aclb4v"/><path class="nngyw5bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:gears"} {...others} />);
}

export default Component;
