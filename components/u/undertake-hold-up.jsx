import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyt1224qi.css';
import '../../css/c/cgwb7wb5t.css';
import '../../css/p/pe8lg5bif.css';
import '../../css/w/w2nbmsbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dyt1224qi"/><path class="cgwb7wb5t"/><path class="pe8lg5bif"/><path class="w2nbmsbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:undertake-hold-up"} {...others} />);
}

export default Component;
