import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq9-xobpt.css';

const viewBox = {"width":62.846,"height":60.485,"left":98.638,"top":11.193};
const content = `<path class="dq9-xobpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:knowbe4"} {...others} />);
}

export default Component;
