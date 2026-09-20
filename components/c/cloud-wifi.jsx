import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bg3tc4bjf.css';
import '../../css/f/fkphrnfxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bg3tc4bjf"/><path class="fkphrnfxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cloud-wifi"} {...others} />);
}

export default Component;
