import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/w-93zx3lf.css';
import '../../css/l/lon5idl_r.css';
import '../../css/x/xis439w_h.css';
import '../../css/v/vrygyxdio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="w-93zx3lf"/><path class="lon5idl_r"/><path class="xis439w_h"/><path class="vrygyxdio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chair-2"} {...others} />);
}

export default Component;
