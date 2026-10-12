import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhcvf5_vd.css';
import '../../css/k/ky6iajb0c.css';
import '../../css/i/ivpl2abwn.css';
import '../../css/v/vy0mydtlr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bhcvf5_vd"/><path class="ky6iajb0c"/><path class="ivpl2abwn"/><path class="vy0mydtlr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:highlighter-circle"} {...others} />);
}

export default Component;
