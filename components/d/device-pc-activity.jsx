import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk2cp-ech.css';
import '../../css/f/f2kyq5bea.css';
import '../../css/i/icb6e6yja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="wk2cp-ech"/><rect class="f2kyq5bea"/><path class="icb6e6yja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-activity"} {...others} />);
}

export default Component;
