import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngzcridyo.css';
import '../../css/m/m-ctracsy.css';
import '../../css/z/zp6b71k1x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ngzcridyo"/><path class="m-ctracsy"/><path class="zp6b71k1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tree-2"} {...others} />);
}

export default Component;
