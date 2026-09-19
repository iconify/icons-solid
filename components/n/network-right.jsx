import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bwx6lbcne.css';
import '../../css/b/b0hlurj5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect transform="matrix(0 -1 -1 0 22 21)" class="bwx6lbcne"/><rect transform="matrix(0 -1 -1 0 7 15.5)" class="bwx6lbcne"/><rect transform="matrix(0 -1 -1 0 22 10)" class="bwx6lbcne"/><path class="b0hlurj5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:network-right"} {...others} />);
}

export default Component;
