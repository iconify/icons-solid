import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ickjunqdw.css';
import '../../css/o/odoplnlhz.css';
import '../../css/q/qcsxd9bfp.css';
import '../../css/q/q_pjyob8z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ickjunqdw"/><path class="odoplnlhz"/><path class="qcsxd9bfp"/><path class="q_pjyob8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scada-20-bold"} {...others} />);
}

export default Component;
