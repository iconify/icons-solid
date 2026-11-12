import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbsvtbcxs.css';
import '../../css/r/raqx0nmsd.css';
import '../../css/a/aaaoe8b6g.css';
import '../../css/i/ii1y0ubpf.css';
import '../../css/i/icck6s-3q.css';
import '../../css/u/uej208bmt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nbsvtbcxs"/><path class="raqx0nmsd"/><path class="aaaoe8b6g"/><path class="ii1y0ubpf"/><path class="icck6s-3q"/><path class="uej208bmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apache-cassandra"} {...others} />);
}

export default Component;
