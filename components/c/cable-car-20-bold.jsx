import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy6sxlqhk.css';
import '../../css/b/bxahjo3ap.css';
import '../../css/y/ycnogikcx.css';
import '../../css/j/j37rrvywc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qy6sxlqhk"/><path class="bxahjo3ap"/><path class="ycnogikcx"/><path class="j37rrvywc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-car-20-bold"} {...others} />);
}

export default Component;
