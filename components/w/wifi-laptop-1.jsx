import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ufsvb2b6l.css';
import '../../css/d/dxes_dboi.css';
import '../../css/u/ulev993bw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ufsvb2b6l"/><path class="dxes_dboi"/><path class="ulev993bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wifi-laptop-1"} {...others} />);
}

export default Component;
