import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6_b6ac2z.css';
import '../../css/c/c05nj8ohm.css';
import '../../css/o/odr93172r.css';
import '../../css/m/mo6_-1b9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w6_b6ac2z"/><path class="c05nj8ohm"/><path class="odr93172r"/><path class="mo6_-1b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:castle-2"} {...others} />);
}

export default Component;
