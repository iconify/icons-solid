import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd_-mkbbv.css';
import '../../css/d/dmbrnfbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vd_-mkbbv"/><path clip-rule="evenodd" class="dmbrnfbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:copy-close-outline"} {...others} />);
}

export default Component;
