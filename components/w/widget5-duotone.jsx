import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yl-99j6_s.css';
import '../../css/p/p5oe1tsku.css';
import '../../css/x/xv_k-3mjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yl-99j6_s"/><path class="p5oe1tsku"/><path class="xv_k-3mjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:widget5-duotone"} {...others} />);
}

export default Component;
