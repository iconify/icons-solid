import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hot0jtf_c.css';
import '../../css/p/p8swzyblw.css';
import '../../css/i/izs6c-bvl.css';
import '../../css/t/tqe-v7b0v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hot0jtf_c"/><path class="p8swzyblw"/><path class="izs6c-bvl"/><path class="tqe-v7b0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weather-vane-48"} {...others} />);
}

export default Component;
