import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l80gl972s.css';
import '../../css/q/qyw8labld.css';
import '../../css/j/jo8s-ccbw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l80gl972s"/><path class="qyw8labld"/><path class="jo8s-ccbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:global-warming-20"} {...others} />);
}

export default Component;
