import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e3b8tiyzr.css';
import '../../css/b/bvtn84bzo.css';
import '../../css/m/mj08r-blc.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e3b8tiyzr"/><path class="bvtn84bzo"/><path class="mj08r-blc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:pen"} {...others} />);
}

export default Component;
