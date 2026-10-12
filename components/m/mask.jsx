import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4yb6nowa.css';
import '../../css/f/f831nsbux.css';
import '../../css/k/kvvnvtbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p4yb6nowa"/><path class="f831nsbux"/><path class="kvvnvtbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mask"} {...others} />);
}

export default Component;
