import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfdnlqvyw.css';
import '../../css/z/zzbol-1ap.css';
import '../../css/d/difx-7blb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lfdnlqvyw"/><path clip-rule="evenodd" class="zzbol-1ap"/><path class="difx-7blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-asia-bold"} {...others} />);
}

export default Component;
