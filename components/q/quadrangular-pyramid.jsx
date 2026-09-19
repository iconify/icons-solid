import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jfck2nb2s.css';
import '../../css/c/cnmqsablm.css';
import '../../css/w/wfv_uybvy.css';
import '../../css/m/mlp-s3bma.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jfck2nb2s"/><path class="cnmqsablm"/><path class="wfv_uybvy"/><path class="mlp-s3bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:quadrangular-pyramid"} {...others} />);
}

export default Component;
