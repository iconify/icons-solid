import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qgky98b5z.css';
import '../../css/r/r5-swrb2t.css';
import '../../css/n/nxfka_biw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qgky98b5z wm-shadow"/><path class="r5-swrb2t wm-shadow"/><path class="nxfka_biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:strikethrough"} {...others} />);
}

export default Component;
