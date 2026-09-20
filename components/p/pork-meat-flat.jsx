import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wpdy7_m7a.css';
import '../../css/c/c585gybuh.css';
import '../../css/p/pyalcp8zz.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wpdy7_m7a"/><path class="c585gybuh"/><path class="pyalcp8zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pork-meat-flat"} {...others} />);
}

export default Component;
