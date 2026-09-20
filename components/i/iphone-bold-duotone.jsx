import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyz0sxbtx.css';
import '../../css/g/g773-itfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyz0sxbtx"/><path class="g773-itfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:iphone-bold-duotone"} {...others} />);
}

export default Component;
