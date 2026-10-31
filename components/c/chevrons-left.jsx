import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qiv7xacvb.css';
import '../../css/p/pqbm_hs5r.css';
import '../../css/r/r2ernklhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qiv7xacvb wm-k"/><path class="pqbm_hs5r wm-a"/><path class="r2ernklhv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chevrons-left"} {...others} />);
}

export default Component;
