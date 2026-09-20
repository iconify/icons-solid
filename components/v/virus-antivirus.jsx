import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/p/pl_8ukb7k.css';
import '../../css/o/oh466gozg.css';
import '../../css/n/n8ly77pzn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="pl_8ukb7k"/><path class="oh466gozg"/><path class="n8ly77pzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:virus-antivirus"} {...others} />);
}

export default Component;
