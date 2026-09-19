import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m0yktsbik.css';
import '../../css/k/kldlbd28x.css';
import '../../css/m/mrfogu88k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="m0yktsbik"/><path class="kldlbd28x"/><path class="mrfogu88k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:bun"} {...others} />);
}

export default Component;
