import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u89o9nb1k.css';
import '../../css/s/sdjauw2nq.css';
import '../../css/p/pd_obh7sp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 17.92 19.2)" class="u89o9nb1k"/><rect transform="matrix(0 -1 -1 0 17.92 19.2)" class="sdjauw2nq"/><path class="pd_obh7sp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-button"} {...others} />);
}

export default Component;
