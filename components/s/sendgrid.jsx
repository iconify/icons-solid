import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p30wh0w8d.css';
import '../../css/q/qf-jq2kcn.css';
import '../../css/a/awltb5o6o.css';
import '../../css/m/m5ig3__2g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p30wh0w8d"/><path class="qf-jq2kcn"/><path class="awltb5o6o"/><path class="m5ig3__2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sendgrid"} {...others} />);
}

export default Component;
