import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qsi2q6bmn.css';
import '../../css/x/xmpu4fb3w.css';
import '../../css/p/pjawsvbom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qsi2q6bmn wm-shadow"/><path class="wm-shadow xmpu4fb3w"/><path class="pjawsvbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:utensils-crossed"} {...others} />);
}

export default Component;
