import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbt4ulf2n.css';

const viewBox = {"width":320,"height":488};
const content = `<path class="hbt4ulf2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:facebook-places"} {...others} />);
}

export default Component;
