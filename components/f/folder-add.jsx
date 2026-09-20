import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9n8z28mx.css';
import '../../css/p/pab997bkl.css';
import '../../css/i/iko852rpv.css';
import '../../css/n/no_ar1xgm.css';
import '../../css/f/f-xbn9b5q.css';
import '../../css/z/zo1om_j7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k9n8z28mx"/><path class="pab997bkl"/><path class="iko852rpv"/><path class="no_ar1xgm"/><path class="f-xbn9b5q"/><path class="zo1om_j7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:folder-add"} {...others} />);
}

export default Component;
