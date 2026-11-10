import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u22fataed.css';
import '../../css/s/se2ssq-zo.css';
import '../../css/z/zen7gwbnt.css';
import '../../css/q/qzo-8rbyh.css';
import '../../css/q/qat2bttar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="u22fataed"/><path class="se2ssq-zo"/><path clip-rule="evenodd" class="zen7gwbnt"/><path class="qzo-8rbyh"/><path class="qat2bttar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-prohibit"} {...others} />);
}

export default Component;
