import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kg11nj89m.css';
import '../../css/q/qhilh8bcr.css';
import '../../css/k/kiqr8zzyi.css';
import '../../css/n/nzmh0imzu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kg11nj89m"/><path clip-rule="evenodd" class="qhilh8bcr"/><path class="kiqr8zzyi"/><path clip-rule="evenodd" class="nzmh0imzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:meh-blank-outline"} {...others} />);
}

export default Component;
