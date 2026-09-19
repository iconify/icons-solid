import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fo8x46baf.css';
import '../../css/d/dwkvoqbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fo8x46baf"/><path class="dwkvoqbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:settings-profiles"} {...others} />);
}

export default Component;
