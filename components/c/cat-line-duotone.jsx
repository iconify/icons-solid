import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q53cqkb9s.css';
import '../../css/v/via5teawz.css';
import '../../css/e/ese_r5zbp.css';
import '../../css/e/eqewprbly.css';
import '../../css/f/ft_qpbc7q.css';
import '../../css/m/mzcgpxb9h.css';
import '../../css/w/wlk_51b6k.css';
import '../../css/x/x0k0zkb6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q53cqkb9s"/><path class="via5teawz"/><path class="ese_r5zbp"/><path class="eqewprbly"/><path class="ft_qpbc7q"/><path class="mzcgpxb9h"/><path class="wlk_51b6k"/><path class="x0k0zkb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cat-line-duotone"} {...others} />);
}

export default Component;
