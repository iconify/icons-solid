import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc1sal3cu.css';
import '../../css/y/yydzvbuei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sc1sal3cu wm-k"/><path class="wm-s yydzvbuei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-plus"} {...others} />);
}

export default Component;
