import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asornzyio.css';
import '../../css/e/elstku5yi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="asornzyio"/><path class="elstku5yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alarm-clock-off-20-bold"} {...others} />);
}

export default Component;
