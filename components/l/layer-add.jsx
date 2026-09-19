import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mlyjx9xfn.css';
import '../../css/n/nj96_stqd.css';
import '../../css/s/swblvjb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mlyjx9xfn"/><path class="nj96_stqd"/><path class="swblvjb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layer-add"} {...others} />);
}

export default Component;
