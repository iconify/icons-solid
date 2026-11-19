import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmr0x_b2r.css';
import '../../css/g/g0m24_bsq.css';
import '../../css/f/fv73eabak.css';
import '../../css/x/x9g6iubus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mmr0x_b2r"/><path class="g0m24_bsq"/><path class="fv73eabak"/><path class="x9g6iubus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-x"} {...others} />);
}

export default Component;
