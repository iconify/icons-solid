import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/apz38mt4g.css';
import '../../css/h/ht5h3ou9h.css';
import '../../css/q/q26m725ij.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="apz38mt4g"/><path class="ht5h3ou9h"/><path class="q26m725ij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:airship-flat"} {...others} />);
}

export default Component;
