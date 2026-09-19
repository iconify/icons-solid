import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xkcaylbjy.css';
import '../../css/d/d4vm_9bok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xkcaylbjy"/><path class="d4vm_9bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-flashdisk"} {...others} />);
}

export default Component;
