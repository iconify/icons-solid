import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_3o7hbpq.css';
import '../../css/q/qfoc8pfkt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t_3o7hbpq"/><path class="qfoc8pfkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tide-high-20-bold"} {...others} />);
}

export default Component;
