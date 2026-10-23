import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jqeg_rc5q.css';
import '../../css/g/g3__l4j4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jqeg_rc5q"/><path class="g3__l4j4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:git-graph"} {...others} />);
}

export default Component;
