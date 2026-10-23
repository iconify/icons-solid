import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq5kuzvqv.css';
import '../../css/b/bnmmfbcbk.css';
import '../../css/l/la4vabcox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oq5kuzvqv"/><circle transform="rotate(90 12 12)" class="bnmmfbcbk"/><path class="la4vabcox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:locate-line"} {...others} />);
}

export default Component;
