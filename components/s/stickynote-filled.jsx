import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdy1asb3s.css';
import '../../css/u/ulof31eud.css';
import '../../css/m/mdxy78itc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zdy1asb3s"/><path class="ulof31eud"/><path class="mdxy78itc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stickynote-filled"} {...others} />);
}

export default Component;
