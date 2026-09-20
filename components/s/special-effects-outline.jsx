import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l12u5k3ye.css';
import '../../css/i/ibs-b3bnk.css';
import '../../css/u/un073yd9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l12u5k3ye"/><path class="ibs-b3bnk"/><path clip-rule="evenodd" class="un073yd9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:special-effects-outline"} {...others} />);
}

export default Component;
