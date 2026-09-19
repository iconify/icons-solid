import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fff_zr3dz.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="fff_zr3dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:peso-sign"} {...others} />);
}

export default Component;
