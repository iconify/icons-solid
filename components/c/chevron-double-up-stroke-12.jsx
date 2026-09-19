import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_hvg2dpg.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="g_hvg2dpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chevron-double-up-stroke-12"} {...others} />);
}

export default Component;
