import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zj5wdiv6o.css';
import '../../css/t/tv1ps05nx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zj5wdiv6o"/><path class="tv1ps05nx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-phone-02"} {...others} />);
}

export default Component;
