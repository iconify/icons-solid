import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjw_jjxvg.css';
import '../../css/k/k8dvft66x.css';
import '../../css/j/jidej3--s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bjw_jjxvg"/><path class="k8dvft66x"/><path class="jidej3--s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:beer"} {...others} />);
}

export default Component;
