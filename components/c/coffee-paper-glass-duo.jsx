import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb-03yjgh.css';
import '../../css/k/k7prnklgb.css';
import '../../css/y/yry0f8gtr.css';
import '../../css/p/pft_r5bmp.css';
import '../../css/g/gxzo7rjpn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jb-03yjgh"/><path class="k7prnklgb"/><path class="yry0f8gtr"/><path clip-rule="evenodd" class="pft_r5bmp"/><path class="gxzo7rjpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:coffee-paper-glass-duo"} {...others} />);
}

export default Component;
