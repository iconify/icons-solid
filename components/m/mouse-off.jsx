import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o76hf3z6x.css';
import '../../css/f/fvpfrkbjr.css';
import '../../css/n/n_-vh9kdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o76hf3z6x"/><path class="fvpfrkbjr"/><path class="n_-vh9kdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-off"} {...others} />);
}

export default Component;
