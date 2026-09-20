import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1pfkf74d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1pfkf74d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:location-restroom"} {...others} />);
}

export default Component;
