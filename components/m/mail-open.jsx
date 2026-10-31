import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqkm3wb2v.css';
import '../../css/j/jm1iecchp.css';
import '../../css/o/o350qbcak.css';
import '../../css/g/gxx1650wi.css';
import '../../css/d/d99n-8beh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eqkm3wb2v wm-k"/><path class="jm1iecchp wm-deco"/><path class="o350qbcak wm-k"/><path class="gxx1650wi wm-shadow"/><path class="d99n-8beh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:mail-open"} {...others} />);
}

export default Component;
