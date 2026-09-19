import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7d-ndb_c.css';
import '../../css/u/uffdfabip.css';
import '../../css/p/pyalxlbvl.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="q7d-ndb_c"/><circle class="uffdfabip"/><circle class="pyalxlbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ellipsis-horizontal-sharp"} {...others} />);
}

export default Component;
