import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lo91wabfr.css';
import '../../css/b/bnvvvmwrl.css';
import '../../css/r/rk5ge1bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lo91wabfr"/><rect transform="matrix(0 -1 -1 0 16.47 19.75)" class="bnvvvmwrl"/><path class="rk5ge1bwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mirror-screen"} {...others} />);
}

export default Component;
