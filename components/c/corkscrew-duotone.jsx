import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cns8dzbnj.css';
import '../../css/z/zshdeb55g.css';
import '../../css/d/dau5s7bgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cns8dzbnj"/><path class="zshdeb55g"/><path class="dau5s7bgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:corkscrew-duotone"} {...others} />);
}

export default Component;
