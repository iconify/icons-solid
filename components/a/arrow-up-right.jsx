import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/plm7q3bkj.css';
import '../../css/k/ky0155huo.css';
import '../../css/h/h7cc31xbh.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="plm7q3bkj"/><path class="ky0155huo"/><path class="h7cc31xbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-up-right"} {...others} />);
}

export default Component;
