import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5kplybjs.css';
import '../../css/g/g7yg0ac0f.css';
import '../../css/q/qevi5wb1d.css';
import '../../css/d/dlqpvfanl.css';
import '../../css/v/vsfmdqbpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5kplybjs"/><path class="g7yg0ac0f"/><path class="qevi5wb1d"/><path class="dlqpvfanl"/><path class="vsfmdqbpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
