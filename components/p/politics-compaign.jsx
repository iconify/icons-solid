import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swu2-ep_t.css';
import '../../css/c/cxoeo1iew.css';
import '../../css/p/p_neqcrey.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="swu2-ep_t"/><path class="cxoeo1iew"/><path class="p_neqcrey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:politics-compaign"} {...others} />);
}

export default Component;
