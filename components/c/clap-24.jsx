import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tba9eignq.css';
import '../../css/q/q0yykybqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tba9eignq"/><path clip-rule="evenodd" class="q0yykybqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:clap-24"} {...others} />);
}

export default Component;
