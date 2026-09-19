import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o1-5lfgdv.css';
import '../../css/q/qa_ur-bdp.css';
import '../../css/d/duhq62b0j.css';
import '../../css/m/ms7x4mb5m.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o1-5lfgdv"/><path class="qa_ur-bdp"/><path class="duhq62b0j"/><path class="ms7x4mb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-outline"} {...others} />);
}

export default Component;
