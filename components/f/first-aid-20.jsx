import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywju0hn3b.css';
import '../../css/l/lytqpepod.css';
import '../../css/o/ortt9nb3x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ywju0hn3b"/><path class="lytqpepod"/><path class="ortt9nb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:first-aid-20"} {...others} />);
}

export default Component;
