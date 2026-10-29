import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pogh8sbbj.css';
import '../../css/h/hvjon5apw.css';
import '../../css/j/jxypp_bkd.css';
import '../../css/t/tm19bt68n.css';
import '../../css/z/zklwrcbdn.css';
import '../../css/g/g6_477byu.css';
import '../../css/z/zawcaob5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="pogh8sbbj wm-deco"/><path class="hvjon5apw wm-deco"/><path class="jxypp_bkd wm-deco"/><path class="tm19bt68n wm-k"/><path class="wm-s zklwrcbdn"/><path class="g6_477byu wm-k"/><path class="wm-s zawcaob5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-upload-blueprint"} {...others} />);
}

export default Component;
