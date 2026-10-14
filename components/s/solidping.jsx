import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sur2lbckt.css';
import '../../css/y/y8vz5lo5y.css';
import '../../css/o/o_9iao69q.css';
import '../../css/o/o_0zo1b5y.css';
import '../../css/b/b-hmcuh1z.css';
import '../../css/c/cb26fesmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sur2lbckt"/><path class="y8vz5lo5y"/><path class="o_9iao69q"/><path class="o_0zo1b5y"/><path class="b-hmcuh1z"/><path class="cb26fesmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:solidping"} {...others} />);
}

export default Component;
