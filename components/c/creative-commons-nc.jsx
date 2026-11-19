import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkakhcc8x.css';
import '../../css/x/x3__3mamu.css';
import '../../css/a/ahrgxxcmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pkakhcc8x"/><path class="x3__3mamu"/><path class="ahrgxxcmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:creative-commons-nc"} {...others} />);
}

export default Component;
