import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p-2b63b8i.css';
import '../../css/q/qnpqtcbjn.css';
import '../../css/j/jxwumcbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p-2b63b8i"/><path class="qnpqtcbjn"/><path class="jxwumcbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:long-sleeve-shirt"} {...others} />);
}

export default Component;
