import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bgb26ij_h.css';
import '../../css/o/obpf2tbvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bgb26ij_h"/><path class="obpf2tbvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:drone"} {...others} />);
}

export default Component;
