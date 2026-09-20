import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r59z3yb4i.css';
import '../../css/c/ctus5v0uu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="r59z3yb4i"/><path class="ctus5v0uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:recycle-bin-throw-2"} {...others} />);
}

export default Component;
