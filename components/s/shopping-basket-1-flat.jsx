import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vm5w9mb2f.css';
import '../../css/l/l7h62c3sj.css';
import '../../css/h/hr1mwlb4r.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vm5w9mb2f"/><path class="l7h62c3sj"/><path class="hr1mwlb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shopping-basket-1-flat"} {...others} />);
}

export default Component;
