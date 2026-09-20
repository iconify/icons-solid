import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w61x5800w.css';
import '../../css/p/pth6q-6tl.css';
import '../../css/e/eo7kmibtw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="w61x5800w"/><path class="pth6q-6tl"/><path class="eo7kmibtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cloud-refresh"} {...others} />);
}

export default Component;
