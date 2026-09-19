import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k8qjkbb0t.css';
import '../../css/i/igqhrwb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k8qjkbb0t"/><path class="igqhrwb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:students"} {...others} />);
}

export default Component;
