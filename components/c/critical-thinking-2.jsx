import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oejjm6btm.css';
import '../../css/t/tny2seb5k.css';
import '../../css/l/l1fqwulbq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="oejjm6btm"/><path class="tny2seb5k"/><path class="l1fqwulbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:critical-thinking-2"} {...others} />);
}

export default Component;
