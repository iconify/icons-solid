import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlx-j4b2l.css';
import '../../css/i/i1jiqq9ax.css';
import '../../css/q/qrdc0-ekd.css';
import '../../css/x/xfroabbqq.css';
import '../../css/o/oiztm8pon.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qlx-j4b2l"/><path class="i1jiqq9ax"/><path class="qrdc0-ekd"/><path class="xfroabbqq"/><path class="oiztm8pon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:timeline-20-bold"} {...others} />);
}

export default Component;
