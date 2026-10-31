import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sy4khbbks.css';
import '../../css/n/n__zolbbq.css';
import '../../css/v/vr7pxjbsj.css';
import '../../css/n/n432umwtk.css';
import '../../css/v/v96mv4btx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sy4khbbks"/><path class="n__zolbbq wm-shine"/><path class="vr7pxjbsj wm-k"/><path class="n432umwtk wm-a"/><path class="v96mv4btx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:send"} {...others} />);
}

export default Component;
