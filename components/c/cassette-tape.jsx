import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h_xn35tda.css';
import '../../css/r/rrbyo-e_z.css';
import '../../css/x/xvpuo63jz.css';
import '../../css/z/zg_zhjrdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="h_xn35tda"/><circle class="rrbyo-e_z"/><circle class="xvpuo63jz"/><path class="zg_zhjrdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:cassette-tape"} {...others} />);
}

export default Component;
