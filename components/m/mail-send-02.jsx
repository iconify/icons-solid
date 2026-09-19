import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjin8obun.css';
import '../../css/c/cjbk8ba1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tjin8obun"/><path class="cjbk8ba1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-send-02"} {...others} />);
}

export default Component;
