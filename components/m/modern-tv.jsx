import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f_ww0acxe.css';
import '../../css/b/bgwc86bzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f_ww0acxe"/><path class="bgwc86bzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:modern-tv"} {...others} />);
}

export default Component;
