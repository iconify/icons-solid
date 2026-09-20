import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfmfmpbxl.css';
import '../../css/m/ml6utgbbo.css';
import '../../css/g/gwabbzj7e.css';
import '../../css/e/eu6y-wbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wfmfmpbxl"/><path clip-rule="evenodd" class="ml6utgbbo"/><path clip-rule="evenodd" class="gwabbzj7e"/><path class="eu6y-wbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-rounded-outline"} {...others} />);
}

export default Component;
