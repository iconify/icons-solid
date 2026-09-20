import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe3g_bcxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fe3g_bcxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:playlist-plus"} {...others} />);
}

export default Component;
