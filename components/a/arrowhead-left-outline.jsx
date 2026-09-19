import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdjnet7ze.css';
import '../../css/v/vmbrozb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdjnet7ze"/><path class="vmbrozb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrowhead-left-outline"} {...others} />);
}

export default Component;
