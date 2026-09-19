import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v2606tbmv.css';
import '../../css/z/zk5qhlbwb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="v2606tbmv"/><path class="zk5qhlbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:loading"} {...others} />);
}

export default Component;
