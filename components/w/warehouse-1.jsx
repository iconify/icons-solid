import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/faj6pbcic.css';
import '../../css/z/zw6nc9byf.css';
import '../../css/y/y9z0mibmw.css';
import '../../css/d/d_sriuk2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="faj6pbcic"/><path class="zw6nc9byf"/><path class="y9z0mibmw"/><path class="d_sriuk2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:warehouse-1"} {...others} />);
}

export default Component;
