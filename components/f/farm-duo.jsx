import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgagmabqs.css';
import '../../css/j/j_tj6dx6x.css';
import '../../css/r/r1i-drbtk.css';
import '../../css/x/xmx-thb_p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qgagmabqs"/><path class="j_tj6dx6x"/><path clip-rule="evenodd" class="r1i-drbtk"/><path clip-rule="evenodd" class="xmx-thb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:farm-duo"} {...others} />);
}

export default Component;
