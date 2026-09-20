import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnv3aud8t.css';
import '../../css/g/g2u1zwb5g.css';
import '../../css/t/t8k5qrblg.css';
import '../../css/p/p_zqi6e0h.css';
import '../../css/z/zn6nqgbao.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cnv3aud8t"/><path class="g2u1zwb5g"/><path class="t8k5qrblg"/><path class="p_zqi6e0h"/><path class="zn6nqgbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hand-held-tablet-writing"} {...others} />);
}

export default Component;
