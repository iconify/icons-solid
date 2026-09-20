import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-o4yc73d.css';
import '../../css/d/dvdnrccbz.css';
import '../../css/b/byzj04xen.css';
import '../../css/m/mwt1_zp3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p-o4yc73d"/><path class="dvdnrccbz"/><path class="byzj04xen"/><path class="mwt1_zp3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:mouse"} {...others} />);
}

export default Component;
