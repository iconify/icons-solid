import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2djj2bco.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="z2djj2bco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:swap-vertical-circle"} {...others} />);
}

export default Component;
