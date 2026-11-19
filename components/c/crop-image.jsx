import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogixtzbek.css';
import '../../css/q/qw3i1bb7d.css';
import '../../css/t/twfhovbjo.css';
import '../../css/h/he2-3jbqb.css';
import '../../css/t/ttvg83bwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ogixtzbek"/><path class="qw3i1bb7d"/><path class="twfhovbjo"/><path class="he2-3jbqb"/><path class="ttvg83bwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:crop-image"} {...others} />);
}

export default Component;
