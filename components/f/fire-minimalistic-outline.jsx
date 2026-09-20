import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wczlshgwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wczlshgwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fire-minimalistic-outline"} {...others} />);
}

export default Component;
