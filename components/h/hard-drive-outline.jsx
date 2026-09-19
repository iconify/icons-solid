import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytwk7rbeg.css';
import '../../css/e/evok60j1h.css';
import '../../css/t/th2sp9bkm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ytwk7rbeg"/><path clip-rule="evenodd" class="evok60j1h"/><path class="th2sp9bkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hard-drive-outline"} {...others} />);
}

export default Component;
