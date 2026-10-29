import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xtzt7ffgw.css';
import '../../css/b/b374bn5-v.css';
import '../../css/o/ocikdtznf.css';
import '../../css/i/ii6vmhn2a.css';
import '../../css/t/tk4n5cftz.css';
import '../../css/i/ibonhrbor.css';
import '../../css/p/p5zwfwbxu.css';
import '../../css/i/izh5ybblu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-a xtzt7ffgw"/><path class="b374bn5-v wm-a"/><path class="ocikdtznf wm-a"/><path class="ii6vmhn2a wm-k"/><path class="tk4n5cftz wm-k"/><path class="ibonhrbor wm-k"/><path class="p5zwfwbxu wm-shine"/><path class="izh5ybblu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:face-mask"} {...others} />);
}

export default Component;
