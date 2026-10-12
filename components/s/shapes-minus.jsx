import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh7lh7byv.css';
import '../../css/c/cwb8cccoz.css';
import '../../css/b/b3pfm_b5j.css';
import '../../css/b/b3mbgltfz.css';
import '../../css/y/yb8t2ebdi.css';
import '../../css/h/ht-je6bpj.css';
import '../../css/d/ds9qkqj_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sh7lh7byv"/><rect class="cwb8cccoz"/><rect transform="rotate(-45 2 6.74)" class="b3pfm_b5j"/><path class="b3mbgltfz"/><rect class="yb8t2ebdi"/><rect transform="rotate(-45 2 6.74)" class="ht-je6bpj"/><path class="ds9qkqj_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shapes-minus"} {...others} />);
}

export default Component;
