import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_zbuvb4o.css';
import '../../css/x/xus1osbxg.css';
import '../../css/l/ln21oebys.css';
import '../../css/c/ctkr9yacj.css';
import '../../css/l/lqpz5_hxp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_zbuvb4o"/><path class="xus1osbxg"/><path class="ln21oebys"/><path class="ctkr9yacj"/><path class="lqpz5_hxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:archiesteamfarm-light"} {...others} />);
}

export default Component;
