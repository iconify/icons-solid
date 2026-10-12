import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6-fuybka.css';
import '../../css/t/tk8vkib5c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m6-fuybka"/><path class="tk8vkib5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:backpack-20"} {...others} />);
}

export default Component;
