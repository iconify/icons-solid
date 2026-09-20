import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d2hs4ibec.css';
import '../../css/y/ycx7kra6s.css';
import '../../css/l/lt3r7j-6z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="d2hs4ibec"/><path class="ycx7kra6s"/><path class="lt3r7j-6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:orientation-portrait"} {...others} />);
}

export default Component;
