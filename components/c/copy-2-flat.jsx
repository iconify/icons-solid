import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j0a576glu.css';
import '../../css/d/dnug5tb-m.css';
import '../../css/p/pm7abs72w.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="j0a576glu"/><path class="dnug5tb-m"/><path class="pm7abs72w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:copy-2-flat"} {...others} />);
}

export default Component;
