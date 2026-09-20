import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/la_plbbrz.css';
import '../../css/w/wz3bazbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="la_plbbrz"/><path class="wz3bazbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:window-application-6"} {...others} />);
}

export default Component;
