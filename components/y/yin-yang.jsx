import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw90d0bdz.css';
import '../../css/h/h27vhbcct.css';
import '../../css/b/b0jhkudka.css';
import '../../css/y/yxcqnac3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jw90d0bdz"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/><path class="b0jhkudka"/><path class="yxcqnac3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:yin-yang"} {...others} />);
}

export default Component;
