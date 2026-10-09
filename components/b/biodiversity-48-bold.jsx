import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un1r_mbsq.css';
import '../../css/x/xffa8bcjg.css';
import '../../css/p/pu1_4vbar.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="un1r_mbsq"/><path class="xffa8bcjg"/><path class="pu1_4vbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biodiversity-48-bold"} {...others} />);
}

export default Component;
