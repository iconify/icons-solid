import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yz5_qw9yo.css';
import '../../css/r/rdsegwbqz.css';
import '../../css/o/os310xbra.css';
import '../../css/i/i_s1w1epm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="yz5_qw9yo"/><path class="rdsegwbqz"/><path class="os310xbra"/><path class="i_s1w1epm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-up"} {...others} />);
}

export default Component;
