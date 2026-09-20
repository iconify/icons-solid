import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wddcw00vy.css';
import '../../css/x/x_zlyssnp.css';
import '../../css/t/t1ifqebhl.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wddcw00vy"/><path class="x_zlyssnp"/><path class="t1ifqebhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:controller-wireless-flat"} {...others} />);
}

export default Component;
