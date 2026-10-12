import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa7izibxv.css';
import '../../css/t/t9gs7gpae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa7izibxv"/><path clip-rule="evenodd" class="t9gs7gpae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:train-front-tunnel-filled"} {...others} />);
}

export default Component;
