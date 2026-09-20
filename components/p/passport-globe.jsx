import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dnbhk4hpf.css';
import '../../css/v/v02e055sl.css';
import '../../css/u/u4139acbk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dnbhk4hpf"/><path class="v02e055sl"/><path class="u4139acbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:passport-globe"} {...others} />);
}

export default Component;
