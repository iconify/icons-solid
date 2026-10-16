import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgu7rtifi.css';
import '../../css/z/zo-uulbpt.css';
import '../../css/b/b_y3iwjuc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rgu7rtifi"/><path class="zo-uulbpt"/><path class="b_y3iwjuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transition-piece-20"} {...others} />);
}

export default Component;
