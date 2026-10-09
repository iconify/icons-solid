import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrwx2vbbl.css';
import '../../css/n/na2wn5bjc.css';
import '../../css/a/a0rbz25oc.css';
import '../../css/o/o4upegzaw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hrwx2vbbl"/><path class="na2wn5bjc"/><path class="a0rbz25oc"/><path class="o4upegzaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:concentrated-solar-20-bold"} {...others} />);
}

export default Component;
