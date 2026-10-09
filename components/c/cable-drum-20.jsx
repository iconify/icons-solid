import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/t/t170-qrdh.css';
import '../../css/w/wiwbm0b8q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="t170-qrdh"/><path class="wiwbm0b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-drum-20"} {...others} />);
}

export default Component;
