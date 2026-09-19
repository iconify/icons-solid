import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdk_g3xvk.css';
import '../../css/o/ok_35jzyh.css';
import '../../css/q/qv0rtbbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wdk_g3xvk"/><circle class="ok_35jzyh"/><path class="qv0rtbbbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:settings-duotone"} {...others} />);
}

export default Component;
