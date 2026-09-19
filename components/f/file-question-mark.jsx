import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p1_qjs5ul.css';
import '../../css/d/d2ll1zofo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p1_qjs5ul"/><path class="d2ll1zofo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-question-mark"} {...others} />);
}

export default Component;
