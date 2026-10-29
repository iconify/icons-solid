import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxl6bezbx.css';
import '../../css/z/zzvwx-xsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k yxl6bezbx"/><path class="wm-a zzvwx-xsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:circle-arrow-down"} {...others} />);
}

export default Component;
