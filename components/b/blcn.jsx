import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l-v5anbse.css';
import '../../css/q/qv7n5va-r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="l-v5anbse"/><path class="qv7n5va-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:blcn"} {...others} />);
}

export default Component;
