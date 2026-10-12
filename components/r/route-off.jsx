import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fs7nt4bkd.css';
import '../../css/t/tc792ph1v.css';
import '../../css/l/l-u_2bbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="matrix(1 0 0 -1 16.07 8.36)" class="fs7nt4bkd"/><circle transform="matrix(1 0 0 -1 2.51 21.06)" class="fs7nt4bkd"/><circle transform="matrix(1 0 0 -1 16.07 8.36)" class="tc792ph1v"/><circle transform="matrix(1 0 0 -1 2.51 21.06)" class="tc792ph1v"/><path class="l-u_2bbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:route-off"} {...others} />);
}

export default Component;
