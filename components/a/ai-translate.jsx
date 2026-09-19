import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pzgtuubjo.css';
import '../../css/r/r9eazyb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pzgtuubjo"/><path class="r9eazyb7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-translate"} {...others} />);
}

export default Component;
