import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2-winazk.css';
import '../../css/n/nt7s2xbxg.css';
import '../../css/k/ktmy7ibfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m2-winazk"/><path clip-rule="evenodd" class="nt7s2xbxg"/><path class="ktmy7ibfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:basketball-duotone"} {...others} />);
}

export default Component;
