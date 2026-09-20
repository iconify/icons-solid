import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_vfp7bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_vfp7bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:coffee-maker"} {...others} />);
}

export default Component;
