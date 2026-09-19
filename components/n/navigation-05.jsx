import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rsuhmibmm.css';
import '../../css/w/wpni9ibne.css';
import '../../css/b/bd54cx9ce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="rsuhmibmm"/><path class="wpni9ibne"/><path class="bd54cx9ce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:navigation-05"} {...others} />);
}

export default Component;
