import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftuix4wah.css';
import '../../css/x/x77lp-bkc.css';
import '../../css/y/y1p7ajbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ftuix4wah"/><rect transform="rotate(-45 27.02 -17.17)scale(1 -1)" class="x77lp-bkc"/><path class="y1p7ajbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-edit"} {...others} />);
}

export default Component;
