import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cj1po-b3t.css';
import '../../css/z/z3j_facfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cj1po-b3t"/><path class="z3j_facfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:calendar-sync"} {...others} />);
}

export default Component;
