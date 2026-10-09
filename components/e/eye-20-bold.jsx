import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoe3avbru.css';
import '../../css/o/okm62lwzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yoe3avbru"/><path class="okm62lwzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-20-bold"} {...others} />);
}

export default Component;
