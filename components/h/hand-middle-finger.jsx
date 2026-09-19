import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuvhuy_rh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iuvhuy_rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hand-middle-finger"} {...others} />);
}

export default Component;
