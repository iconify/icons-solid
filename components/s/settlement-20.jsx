import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojvto6arq.css';
import '../../css/p/pk8nyac2p.css';
import '../../css/u/u0yotwbap.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ojvto6arq"/><path class="pk8nyac2p"/><path class="u0yotwbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:settlement-20"} {...others} />);
}

export default Component;
