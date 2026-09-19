import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/ptu5npu7w.css';
import '../../css/t/txkbbj35b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ptu5npu7w"/><path class="txkbbj35b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ghost"} {...others} />);
}

export default Component;
