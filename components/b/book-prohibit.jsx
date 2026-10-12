import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs_fncczg.css';
import '../../css/v/vcfe3_bem.css';
import '../../css/u/u22fataed.css';
import '../../css/s/se2ssq-zo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bs_fncczg"/><path class="vcfe3_bem"/><circle transform="rotate(90 12 10.12)" class="u22fataed"/><path class="se2ssq-zo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-prohibit"} {...others} />);
}

export default Component;
