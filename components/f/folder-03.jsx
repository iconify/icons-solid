import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dam_szrrv.css';
import '../../css/l/lyjfm3blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dam_szrrv"/><path class="lyjfm3blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-03"} {...others} />);
}

export default Component;
