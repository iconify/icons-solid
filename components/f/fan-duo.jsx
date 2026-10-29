import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tpg92ie3l.css';
import '../../css/b/bpo7kkb-y.css';
import '../../css/u/uxm70-bnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tpg92ie3l"/><path class="bpo7kkb-y wm-a"/><path class="uxm70-bnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fan-duo"} {...others} />);
}

export default Component;
