import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i2iiwfb2x.css';
import '../../css/x/xnh1ybbye.css';
import '../../css/y/yq3ukacfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i2iiwfb2x"/><path class="xnh1ybbye"/><path class="yq3ukacfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:to-pip-linear"} {...others} />);
}

export default Component;
