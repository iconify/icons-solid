import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-4rqjbfm.css';
import '../../css/r/rul18paak.css';
import '../../css/l/l3vl_joki.css';
import '../../css/m/mbx7u6bcq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t-4rqjbfm"/><path class="rul18paak"/><path class="l3vl_joki"/><path class="mbx7u6bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lever-48-bold"} {...others} />);
}

export default Component;
