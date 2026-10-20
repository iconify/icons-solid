import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4mjjratt.css';
import '../../css/d/d45xejkbu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d4mjjratt"/><path class="d45xejkbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-bottom-20-bold"} {...others} />);
}

export default Component;
