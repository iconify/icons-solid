import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0-ydxhpn.css';
import '../../css/i/ids849bmv.css';

const viewBox = {"width":30,"height":30};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c0-ydxhpn"/><path class="ids849bmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:postmark"} {...others} />);
}

export default Component;
