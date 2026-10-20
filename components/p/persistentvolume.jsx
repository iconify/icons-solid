import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/q/qxob5uprc.css';
import '../../css/l/lvn_ewc7g.css';
import '../../css/u/ut14fmbhd.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="qxob5uprc"/><path class="lvn_ewc7g"/><path class="ut14fmbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:persistentvolume"} {...others} />);
}

export default Component;
