import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmc3k_b0p.css';
import '../../css/d/dmpo4f1qq.css';
import '../../css/w/wytrwuroy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kmc3k_b0p"/><path class="dmpo4f1qq"/><path clip-rule="evenodd" class="wytrwuroy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:browse"} {...others} />);
}

export default Component;
