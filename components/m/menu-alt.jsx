import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbx0ibcmh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tbx0ibcmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:menu-alt"} {...others} />);
}

export default Component;
