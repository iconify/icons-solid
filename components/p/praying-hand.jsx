import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oq3h-vbzn.css';
import '../../css/c/c07-ede5k.css';
import '../../css/p/p9l-rac5w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="oq3h-vbzn"/><path class="c07-ede5k"/><path class="p9l-rac5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:praying-hand"} {...others} />);
}

export default Component;
