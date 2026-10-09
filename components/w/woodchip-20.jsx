import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcuvsac6i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zcuvsac6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:woodchip-20"} {...others} />);
}

export default Component;
