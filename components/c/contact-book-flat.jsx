import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s4-f90s9w.css';
import '../../css/q/qah4m-bar.css';
import '../../css/v/vcjuu9ttu.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="s4-f90s9w"/><path class="qah4m-bar"/><path class="vcjuu9ttu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:contact-book-flat"} {...others} />);
}

export default Component;
