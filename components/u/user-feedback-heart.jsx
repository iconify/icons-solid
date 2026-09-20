import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jraue_tdc.css';
import '../../css/e/ec95bdcxq.css';
import '../../css/f/feaku4dqc.css';
import '../../css/v/v34_-hv-q.css';
import '../../css/x/x51av1bbp.css';
import '../../css/w/w9ihwp2qg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="jraue_tdc"/><path class="ec95bdcxq"/><path class="feaku4dqc"/><path class="v34_-hv-q"/><path class="x51av1bbp"/><path class="w9ihwp2qg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-feedback-heart"} {...others} />);
}

export default Component;
