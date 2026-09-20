import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oql1kobcb.css';
import '../../css/g/g5kkp7gtx.css';
import '../../css/w/wgotb4uuw.css';
import '../../css/h/hrc2es1-c.css';
import '../../css/y/ysdgl0wdk.css';
import '../../css/x/x_7lydbka.css';
import '../../css/k/kk7ir6bzi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oql1kobcb"/><path class="g5kkp7gtx"/><path class="wgotb4uuw"/><path class="hrc2es1-c"/><path class="ysdgl0wdk"/><path class="x_7lydbka"/><path class="kk7ir6bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cnbc"} {...others} />);
}

export default Component;
