import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz_2ei_9u.css';

const viewBox = {"width":336,"height":488};
const content = `<path class="rz_2ei_9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:zerply"} {...others} />);
}

export default Component;
