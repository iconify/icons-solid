import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp42yhc0n.css';
import '../../css/m/mrws6bc9j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dp42yhc0n"/><path class="mrws6bc9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hacksaw-20-bold"} {...others} />);
}

export default Component;
