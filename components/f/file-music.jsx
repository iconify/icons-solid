import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xm7rr7a9x.css';
import '../../css/r/risfjtb6e.css';
import '../../css/z/zdvwoab3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xm7rr7a9x"/><path class="risfjtb6e"/><path class="zdvwoab3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-music"} {...others} />);
}

export default Component;
