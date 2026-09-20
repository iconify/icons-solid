import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lj0iy4i-g.css';
import '../../css/w/we-n9xbbi.css';
import '../../css/l/lnl-rg5ys.css';
import '../../css/r/ra_w25bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lj0iy4i-g"/><path class="we-n9xbbi"/><path class="lnl-rg5ys"/><path class="ra_w25bcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:file-code-c-plus-plus"} {...others} />);
}

export default Component;
