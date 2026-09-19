import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0t-ulkpt.css';
import '../../css/q/qsd78cb5q.css';
import '../../css/n/nivgmebkz.css';
import '../../css/f/ffrw3mbrn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="x0t-ulkpt"/><path clip-rule="evenodd" class="qsd78cb5q"/><path class="nivgmebkz"/><path clip-rule="evenodd" class="ffrw3mbrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pharmacy-1-outline"} {...others} />);
}

export default Component;
