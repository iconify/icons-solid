import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w07o7rb0l.css';
import '../../css/z/z4o_8eb_q.css';
import '../../css/y/yvyc8v67g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w07o7rb0l"/><path class="z4o_8eb_q"/><path class="yvyc8v67g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:archery-20-bold"} {...others} />);
}

export default Component;
