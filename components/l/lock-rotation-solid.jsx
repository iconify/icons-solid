import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u9p4c4uvm.css';
import '../../css/c/cd636xjdg.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u9p4c4uvm"/><path class="cd636xjdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:lock-rotation-solid"} {...others} />);
}

export default Component;
