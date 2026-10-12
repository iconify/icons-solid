import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyptepbli.css';
import '../../css/t/tmu41y1sj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zyptepbli"/><path class="tmu41y1sj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fox-20"} {...others} />);
}

export default Component;
