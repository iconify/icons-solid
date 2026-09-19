import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o7go62bvs.css';
import '../../css/r/r74jfkeku.css';
import '../../css/w/wtwsfcbkl.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o7go62bvs"/><path class="r74jfkeku"/><path class="wtwsfcbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-right"} {...others} />);
}

export default Component;
