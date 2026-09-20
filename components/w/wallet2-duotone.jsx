import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nir5_sbal.css';
import '../../css/s/spmundq3k.css';
import '../../css/w/wd5g6kh7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nir5_sbal"/><path clip-rule="evenodd" class="spmundq3k"/><path class="wd5g6kh7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet2-duotone"} {...others} />);
}

export default Component;
