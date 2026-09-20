import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0-uzvbqo.css';
import '../../css/n/n2_1awp8x.css';
import '../../css/p/pj_qzabvz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="m0-uzvbqo"/><path class="n2_1awp8x"/><path class="pj_qzabvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:gift-2"} {...others} />);
}

export default Component;
