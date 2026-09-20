import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zu-ux3bfk.css';
import '../../css/h/ht6_tfbrd.css';
import '../../css/r/rh4ip8yrd.css';
import '../../css/w/waw1v4lte.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zu-ux3bfk"/><path class="ht6_tfbrd"/><path class="rh4ip8yrd"/><path class="waw1v4lte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cellular-network-wifi-3g"} {...others} />);
}

export default Component;
