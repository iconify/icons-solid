import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpger37ta.css';
import '../../css/o/od_zyybil.css';
import '../../css/l/lmps3mg_l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpger37ta"/><path class="od_zyybil"/><path class="lmps3mg_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:butterfly-48"} {...others} />);
}

export default Component;
