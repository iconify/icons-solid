import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2ft5u2rt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w2ft5u2rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wifi-angle-bold"} {...others} />);
}

export default Component;
