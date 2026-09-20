import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/httstt_8v.css';
import '../../css/o/o-ejz-b0a.css';
import '../../css/q/qpcow5bvc.css';
import '../../css/z/z6blvu--y.css';
import '../../css/x/xvfra1b9t.css';
import '../../css/m/mzytts-on.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="httstt_8v"><path class="o-ejz-b0a"/><path class="qpcow5bvc"/><path class="z6blvu--y"/><path class="xvfra1b9t"/></g><path class="mzytts-on"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-2-bold-duotone"} {...others} />);
}

export default Component;
