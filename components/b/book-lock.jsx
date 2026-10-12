import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igq5atbrj.css';
import '../../css/n/nwpa4p52r.css';
import '../../css/u/u953isb0v.css';
import '../../css/a/aiwq2mb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="igq5atbrj"/><path class="nwpa4p52r"/><rect class="u953isb0v"/><path class="aiwq2mb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-lock"} {...others} />);
}

export default Component;
