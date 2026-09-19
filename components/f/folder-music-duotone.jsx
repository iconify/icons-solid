import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjdaas3bt.css';
import '../../css/c/cff9as3hm.css';
import '../../css/y/y10-r2bvg.css';
import '../../css/n/nq-2sy44y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zjdaas3bt"/><path class="cff9as3hm"/><circle class="y10-r2bvg"/><path class="nq-2sy44y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-music-duotone"} {...others} />);
}

export default Component;
