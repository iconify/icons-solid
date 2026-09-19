import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h-yjfcvrx.css';
import '../../css/z/zag4mw0mt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h-yjfcvrx"/><path class="zag4mw0mt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-money-01"} {...others} />);
}

export default Component;
