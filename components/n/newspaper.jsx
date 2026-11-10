import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hn1whcc4k.css';
import '../../css/k/kftf4_-oi.css';
import '../../css/n/n84ctjb9x.css';
import '../../css/j/jz0byia2f.css';
import '../../css/o/on1zx3bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hn1whcc4k"/><path class="kftf4_-oi"/><path class="n84ctjb9x"/><path class="jz0byia2f"/><path class="on1zx3bbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:newspaper"} {...others} />);
}

export default Component;
