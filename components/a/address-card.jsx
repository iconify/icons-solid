import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8x5l_bcy.css';
import '../../css/i/ipq564i7x.css';
import '../../css/u/umur_bc0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a8x5l_bcy"/><path clip-rule="evenodd" class="ipq564i7x"/><path clip-rule="evenodd" class="umur_bc0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:address-card"} {...others} />);
}

export default Component;
