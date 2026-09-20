import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vtiaafd8f.css';
import '../../css/k/kftdv7k3g.css';
import '../../css/q/qgt064bwt.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vtiaafd8f"/><path class="kftdv7k3g"/><path class="qgt064bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-right"} {...others} />);
}

export default Component;
