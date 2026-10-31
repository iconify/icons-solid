import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c4tjji0yl.css';
import '../../css/j/jl1zyerdy.css';
import '../../css/z/zi7kpcbav.css';
import '../../css/v/vxiu5wdec.css';
import '../../css/a/ayec1tbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c4tjji0yl wm-shadow"/><path class="jl1zyerdy wm-shadow"/><path class="zi7kpcbav"/><path class="vxiu5wdec"/><path class="ayec1tbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-penguin"} {...others} />);
}

export default Component;
