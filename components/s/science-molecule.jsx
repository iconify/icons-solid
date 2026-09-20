import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz28-6bjy.css';
import '../../css/i/i6q7t-eyn.css';
import '../../css/z/zzjg_ttrw.css';
import '../../css/a/a3b31-ezn.css';
import '../../css/f/f-b3drkzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iz28-6bjy"/><path class="i6q7t-eyn"/><path class="zzjg_ttrw"/><path class="a3b31-ezn"/><path class="f-b3drkzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:science-molecule"} {...others} />);
}

export default Component;
