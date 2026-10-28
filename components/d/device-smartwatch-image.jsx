import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffkfc4bxc.css';
import '../../css/u/ugkloo4ck.css';
import '../../css/b/btj6uo__h.css';
import '../../css/w/w0d86lb_p.css';
import '../../css/q/quuu5zb_x.css';
import '../../css/a/aq3garbob.css';
import '../../css/a/ab4wtmbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 7.23 5.29)" class="ffkfc4bxc"/><rect transform="rotate(-90 7.23 22.2)" class="ugkloo4ck"/><rect transform="rotate(-90 4.83 18.71)" class="btj6uo__h"/><path class="w0d86lb_p"/><path class="quuu5zb_x"/><path class="aq3garbob"/><path class="ab4wtmbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-smartwatch-image"} {...others} />);
}

export default Component;
