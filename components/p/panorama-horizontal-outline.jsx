import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9_dc2bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9_dc2bvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:panorama-horizontal-outline"} {...others} />);
}

export default Component;
