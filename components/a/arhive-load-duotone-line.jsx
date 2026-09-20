import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfgmwlw-y.css';
import '../../css/w/wup-x7b1q.css';
import '../../css/e/endkth4bt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cfgmwlw-y"/><path class="wup-x7b1q"/><path class="endkth4bt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-load-duotone-line"} {...others} />);
}

export default Component;
