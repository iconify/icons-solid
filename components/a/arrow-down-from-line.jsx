import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g1z4pnb_m.css';
import '../../css/l/lobj_3gyy.css';
import '../../css/a/ank-fxw4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="g1z4pnb_m"/><path class="lobj_3gyy"/><path class="ank-fxw4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:arrow-down-from-line"} {...others} />);
}

export default Component;
