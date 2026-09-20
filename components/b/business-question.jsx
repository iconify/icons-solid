import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dz2jgmblh.css';
import '../../css/v/v9voqlbkr.css';
import '../../css/n/n46ex7bxd.css';
import '../../css/x/xzld9cb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="dz2jgmblh"/><path class="v9voqlbkr"/><path class="n46ex7bxd"/><path class="xzld9cb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-question"} {...others} />);
}

export default Component;
