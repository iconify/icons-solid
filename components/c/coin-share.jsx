import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bdc3bdc5n.css';
import '../../css/z/zo424fbfd.css';
import '../../css/l/l09e8bbhy.css';
import '../../css/u/u_at98btu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bdc3bdc5n"/><path class="zo424fbfd"/><path class="l09e8bbhy"/><path class="u_at98btu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:coin-share"} {...others} />);
}

export default Component;
