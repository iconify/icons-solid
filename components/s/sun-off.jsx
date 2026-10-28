import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4jkmzbjk.css';
import '../../css/x/xlat1xboc.css';
import '../../css/r/rts03fbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 11.97 11.99)" class="l4jkmzbjk"/><circle transform="rotate(90 11.97 11.99)" class="xlat1xboc"/><path class="rts03fbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sun-off"} {...others} />);
}

export default Component;
