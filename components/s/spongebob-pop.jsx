import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqnzj6bbj.css';
import '../../css/b/bpsa0de2m.css';
import '../../css/a/azyp5krha.css';
import '../../css/v/vs6aec0bw.css';
import '../../css/d/d_z1_pb0b.css';
import '../../css/i/ixng5wmwp.css';
import '../../css/z/z6wlmdexv.css';
import '../../css/i/iakx2db0c.css';
import '../../css/d/dqmq9mb0h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cqnzj6bbj"/><path clip-rule="evenodd" class="bpsa0de2m"/><path class="azyp5krha"/><path clip-rule="evenodd" class="vs6aec0bw"/><path class="d_z1_pb0b"/><path class="ixng5wmwp"/><path class="z6wlmdexv"/><path clip-rule="evenodd" class="iakx2db0c"/><path class="dqmq9mb0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:spongebob-pop"} {...others} />);
}

export default Component;
