import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sx2o51k2m.css';
import '../../css/d/dt-dc1j3v.css';
import '../../css/m/m_6pf-bvu.css';
import '../../css/v/vyzg3stsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sx2o51k2m wm-deco"/><path class="dt-dc1j3v wm-deco"/><path class="m_6pf-bvu wm-k"/><path class="vyzg3stsl wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:blocks-blueprint"} {...others} />);
}

export default Component;
