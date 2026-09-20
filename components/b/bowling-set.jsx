import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jb-nsc-ss.css';
import '../../css/z/z1hb57k7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jb-nsc-ss"/><path class="z1hb57k7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bowling-set"} {...others} />);
}

export default Component;
