import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3bxkfujr.css';
import '../../css/p/pb-qxi-fw.css';
import '../../css/s/sd_je82ls.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w3bxkfujr"/><path clip-rule="evenodd" class="pb-qxi-fw"/><path class="sd_je82ls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:screenshot-flat"} {...others} />);
}

export default Component;
