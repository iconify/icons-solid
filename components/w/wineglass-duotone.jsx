import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rm0-lnbdd.css';
import '../../css/p/pzwkpurmq.css';
import '../../css/y/y1gskxbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rm0-lnbdd"/><path clip-rule="evenodd" class="pzwkpurmq"/><path class="y1gskxbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wineglass-duotone"} {...others} />);
}

export default Component;
