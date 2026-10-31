import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ldjhm2bpx.css';
import '../../css/l/lu_jwkbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ldjhm2bpx"/><path class="lu_jwkbsc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sigma"} {...others} />);
}

export default Component;
