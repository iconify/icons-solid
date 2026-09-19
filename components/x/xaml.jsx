import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/exab9tbzj.css';
import '../../css/h/hjc01wbek.css';
import '../../css/t/tewf8ur7b.css';
import '../../css/j/j6h5u6bas.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="exab9tbzj"/><path class="hjc01wbek"/><path class="tewf8ur7b"/><path class="j6h5u6bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:xaml"} {...others} />);
}

export default Component;
