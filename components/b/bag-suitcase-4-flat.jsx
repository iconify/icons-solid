import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p71m-ys5l.css';
import '../../css/z/zjq1ew06h.css';
import '../../css/o/of-4y9qcp.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="p71m-ys5l"/><path class="zjq1ew06h"/><path class="of-4y9qcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:bag-suitcase-4-flat"} {...others} />);
}

export default Component;
