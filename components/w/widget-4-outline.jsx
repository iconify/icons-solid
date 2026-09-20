import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t3beugbjl.css';
import '../../css/q/qwbpu091i.css';
import '../../css/a/aijn3wnky.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t3beugbjl"/><path class="qwbpu091i"/><path class="aijn3wnky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-4-outline"} {...others} />);
}

export default Component;
