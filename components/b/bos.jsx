import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o5kxgqo1l.css';
import '../../css/m/mkpnpuify.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="o5kxgqo1l"/><path class="mkpnpuify"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:bos"} {...others} />);
}

export default Component;
