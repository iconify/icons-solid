import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj0lqmb_y.css';
import '../../css/t/t8icqb2ug.css';
import '../../css/a/abqew6ljc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rj0lqmb_y"/><path class="t8icqb2ug"/><path class="abqew6ljc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lng-ship-20"} {...others} />);
}

export default Component;
