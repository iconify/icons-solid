import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2ephobok.css';
import '../../css/c/clgy_7biu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p2ephobok"/><path class="clgy_7biu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:route-20"} {...others} />);
}

export default Component;
