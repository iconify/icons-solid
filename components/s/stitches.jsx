import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/s/sx9el_bjm.css';
import '../../css/i/iecyqkq9h.css';
import '../../css/e/eojgc1bbu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="sx9el_bjm"/><path class="iecyqkq9h"/><path class="eojgc1bbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:stitches"} {...others} />);
}

export default Component;
