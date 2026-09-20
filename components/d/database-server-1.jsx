import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nd42ubcwx.css';
import '../../css/z/zx5wzmbhm.css';
import '../../css/u/uy4-h-b6o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="nd42ubcwx"/><path class="zx5wzmbhm"/><path class="uy4-h-b6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-server-1"} {...others} />);
}

export default Component;
