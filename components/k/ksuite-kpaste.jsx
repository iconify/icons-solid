import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjmzeoexf.css';
import '../../css/q/qrbdx9gbx.css';
import '../../css/v/vc7mhgvcb.css';
import '../../css/m/mkp_-2o3y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rjmzeoexf"/><path class="qrbdx9gbx"/><path class="vc7mhgvcb"/><path class="mkp_-2o3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kpaste"} {...others} />);
}

export default Component;
