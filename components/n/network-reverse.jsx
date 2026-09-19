import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bwx6lbcne.css';
import '../../css/v/vh_i6z9mv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect transform="matrix(1 0 0 -1 3 22)" class="bwx6lbcne"/><rect transform="matrix(1 0 0 -1 8.5 7)" class="bwx6lbcne"/><rect transform="matrix(1 0 0 -1 14 22)" class="bwx6lbcne"/><path class="vh_i6z9mv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:network-reverse"} {...others} />);
}

export default Component;
