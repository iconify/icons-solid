import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wm_sm3bjv.css';
import '../../css/n/nzvqko3ep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wm_sm3bjv"/><path class="nzvqko3ep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp"} {...others} />);
}

export default Component;
