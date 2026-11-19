import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev4ntdbab.css';
import '../../css/y/ynxvfczso.css';
import '../../css/w/w1dv7ab8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ev4ntdbab"/><circle class="ynxvfczso"/><path class="w1dv7ab8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sun"} {...others} />);
}

export default Component;
