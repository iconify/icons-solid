import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4slh4bwa.css';
import '../../css/t/td-ybovkx.css';
import '../../css/f/fnaxk-b_r.css';
import '../../css/j/jzeh2cbeq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w4slh4bwa"/><path class="td-ybovkx"/><path class="fnaxk-b_r"/><path class="jzeh2cbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-station-x-20-bold"} {...others} />);
}

export default Component;
