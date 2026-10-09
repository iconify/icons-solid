import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtsgfacfk.css';
import '../../css/b/bzc7trb_y.css';
import '../../css/n/nwz76kjzw.css';
import '../../css/h/hztb-052z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wtsgfacfk"/><path class="bzc7trb_y"/><path class="nwz76kjzw"/><path class="hztb-052z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:concentrated-solar-20"} {...others} />);
}

export default Component;
