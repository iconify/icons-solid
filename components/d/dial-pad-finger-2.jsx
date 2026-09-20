import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bb-99ex1u.css';
import '../../css/p/pwxuvk4_g.css';
import '../../css/w/wgjovc_7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bb-99ex1u"/><path class="pwxuvk4_g"/><path class="wgjovc_7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:dial-pad-finger-2"} {...others} />);
}

export default Component;
