import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f2k_vfbyz.css';
import '../../css/y/ym9-7y2gf.css';
import '../../css/v/vh5vhwbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f2k_vfbyz"/><path class="ym9-7y2gf"/><path class="vh5vhwbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hierarchy-8"} {...others} />);
}

export default Component;
