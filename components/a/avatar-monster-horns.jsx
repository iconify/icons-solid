import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lhktn3brq.css';
import '../../css/x/x4gvs2bzs.css';
import '../../css/u/uf12nwbju.css';
import '../../css/x/xsqjbkjqg.css';
import '../../css/k/klfzlu_vz.css';
import '../../css/u/ujrkc1bmm.css';
import '../../css/v/v_qpa3bus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lhktn3brq"/><path class="x4gvs2bzs"/><path class="uf12nwbju"/><path class="wm-shine xsqjbkjqg"/><path class="klfzlu_vz wm-k"/><path class="ujrkc1bmm wm-a"/><path class="v_qpa3bus wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-monster-horns"} {...others} />);
}

export default Component;
