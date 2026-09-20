import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/zfi_0j46e.css';
import '../../css/x/x4vdnyb5g.css';
import '../../css/k/k55plwnvr.css';
import '../../css/s/soldx753t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="zfi_0j46e"/><path class="x4vdnyb5g"/><path class="k55plwnvr"/><path class="soldx753t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:layers-1"} {...others} />);
}

export default Component;
