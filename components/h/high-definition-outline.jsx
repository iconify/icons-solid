import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2gxr5bwv.css';
import '../../css/x/xf6edy14c.css';
import '../../css/b/bbrv0_ogo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f2gxr5bwv"/><path clip-rule="evenodd" class="xf6edy14c"/><path clip-rule="evenodd" class="bbrv0_ogo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:high-definition-outline"} {...others} />);
}

export default Component;
