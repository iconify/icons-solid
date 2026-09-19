import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvwqk-blo.css';
import '../../css/a/a3vv8kymh.css';
import '../../css/g/g5s83bb7v.css';
import '../../css/f/flsl0ybgw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nvwqk-blo"/><path class="a3vv8kymh"/><path class="g5s83bb7v"/><path class="flsl0ybgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clap"} {...others} />);
}

export default Component;
