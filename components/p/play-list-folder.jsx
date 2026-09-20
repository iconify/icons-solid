import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqv_hlu0c.css';
import '../../css/o/okbddd1na.css';
import '../../css/z/z6l2hua_z.css';
import '../../css/x/xb_nj9blz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tqv_hlu0c"/><path clip-rule="evenodd" class="okbddd1na"/><path class="z6l2hua_z"/><path class="xb_nj9blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-list-folder"} {...others} />);
}

export default Component;
