import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uy00pjvok.css';
import '../../css/v/vb2u8wvcg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="uy00pjvok"/><path class="vb2u8wvcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:makefile"} {...others} />);
}

export default Component;
