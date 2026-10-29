import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx66pva8x.css';
import '../../css/l/l67st8b5a.css';
import '../../css/s/s_a69j5sy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx66pva8x wm-k"/><path class="l67st8b5a wm-a"/><path class="s_a69j5sy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:image"} {...others} />);
}

export default Component;
