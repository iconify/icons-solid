import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ptdw1e09f.css';
import '../../css/q/q5mhbjb1t.css';
import '../../css/r/r9zsy3bzc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ptdw1e09f"/><path class="q5mhbjb1t"/><path class="r9zsy3bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:rocket"} {...others} />);
}

export default Component;
