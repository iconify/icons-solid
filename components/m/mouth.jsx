import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f-6kokb7j.css';
import '../../css/c/cnmqsablm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="f-6kokb7j"/><path class="cnmqsablm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mouth"} {...others} />);
}

export default Component;
