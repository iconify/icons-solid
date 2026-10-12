import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dz5hr8fgm.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/r/r65dsccns.css';
import '../../css/a/ak5a0ziex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.58)scale(-1 1)" class="dz5hr8fgm"/><rect transform="rotate(90 0 21.58)scale(-1 1)" class="fpuyb9bst"/><path class="r65dsccns"/><path class="ak5a0ziex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:analytics-increase"} {...others} />);
}

export default Component;
