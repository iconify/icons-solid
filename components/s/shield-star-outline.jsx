import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on5jz7bsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="on5jz7bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-star-outline"} {...others} />);
}

export default Component;
