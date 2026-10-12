import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjegt3brg.css';
import '../../css/m/mw2trdbva.css';
import '../../css/j/jd40gwbch.css';
import '../../css/l/lujo4p4-k.css';
import '../../css/k/kz1ruhbcs.css';
import '../../css/j/jcgbvuhph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rjegt3brg"/><path class="mw2trdbva"/><path class="jd40gwbch"/><path class="lujo4p4-k"/><path class="kz1ruhbcs"/><path class="jcgbvuhph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:blush-brush-sparkle"} {...others} />);
}

export default Component;
