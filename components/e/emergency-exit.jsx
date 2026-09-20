import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vjqb8qbgy.css';
import '../../css/l/lvcothbvk.css';
import '../../css/a/anfghqbkx.css';
import '../../css/p/p4xx_i96r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vjqb8qbgy"/><path class="lvcothbvk"/><path class="anfghqbkx"/><path class="p4xx_i96r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:emergency-exit"} {...others} />);
}

export default Component;
