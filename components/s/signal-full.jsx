import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zr0m-iror.css';
import '../../css/h/h-apisbsn.css';
import '../../css/c/cdcs0rw4n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zr0m-iror"/><path class="h-apisbsn"/><path class="cdcs0rw4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:signal-full"} {...others} />);
}

export default Component;
