import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/snf70z_9b.css';
import '../../css/a/a84nvnbir.css';
import '../../css/e/epl_q__wp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="snf70z_9b"/><path class="a84nvnbir"/><path class="epl_q__wp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:startup"} {...others} />);
}

export default Component;
