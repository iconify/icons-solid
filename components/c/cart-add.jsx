import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s31t99skb.css';
import '../../css/u/uii4avzkv.css';
import '../../css/d/d2mvnsbwq.css';
import '../../css/a/ah0waennr.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="s31t99skb"/><circle class="uii4avzkv"/><path class="d2mvnsbwq"/><path class="ah0waennr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:cart-add"} {...others} />);
}

export default Component;
