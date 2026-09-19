import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zkeflxwfw.css';
import '../../css/h/h91kivbld.css';
import '../../css/v/vh1du6bdw.css';
import '../../css/r/re3888b2p.css';
import '../../css/z/zjw_mvbko.css';
import '../../css/u/uzikyqb3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="zkeflxwfw"/><path class="h91kivbld"/><path class="vh1du6bdw"/><path class="re3888b2p"/><path class="zjw_mvbko"/><circle class="uzikyqb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:projector-two"} {...others} />);
}

export default Component;
