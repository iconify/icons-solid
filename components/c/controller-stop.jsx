import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5_k6bbph.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w5_k6bbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:controller-stop"} {...others} />);
}

export default Component;
