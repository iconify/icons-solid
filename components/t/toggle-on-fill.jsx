import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxp_3lb6k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vxp_3lb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:toggle-on-fill"} {...others} />);
}

export default Component;
