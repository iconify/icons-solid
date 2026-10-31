import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wce1258hs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wce1258hs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-right-close-round"} {...others} />);
}

export default Component;
