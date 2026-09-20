import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/o_eemtw3s.css';
import '../../css/m/mzyopqbdv.css';
import '../../css/y/yhxdwobwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="o_eemtw3s"/><circle transform="rotate(90 7 8)" class="mzyopqbdv"/><circle transform="rotate(90 17 16)" class="yhxdwobwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:filter-big"} {...others} />);
}

export default Component;
