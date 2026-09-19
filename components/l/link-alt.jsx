import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl9-1ibeu.css';
import '../../css/m/m3no34b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cl9-1ibeu"/><path class="m3no34b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:link-alt"} {...others} />);
}

export default Component;
