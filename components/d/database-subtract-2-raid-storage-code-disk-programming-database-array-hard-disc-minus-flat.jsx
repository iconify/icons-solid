import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en_2v4bce.css';
import '../../css/w/wzn7kzbcm.css';
import '../../css/b/bajgj7b2l.css';
import '../../css/x/xb6p_z-er.css';
import '../../css/u/uevo4sbur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="en_2v4bce"/><path clip-rule="evenodd" class="wzn7kzbcm"/><path class="bajgj7b2l"/><path clip-rule="evenodd" class="xb6p_z-er"/><path class="uevo4sbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-subtract-2-raid-storage-code-disk-programming-database-array-hard-disc-minus-flat"} {...others} />);
}

export default Component;
