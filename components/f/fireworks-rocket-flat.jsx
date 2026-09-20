import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zf0gm4int.css';
import '../../css/u/u17sczo3a.css';
import '../../css/z/z1idorbcj.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zf0gm4int"/><path class="u17sczo3a"/><path class="z1idorbcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fireworks-rocket-flat"} {...others} />);
}

export default Component;
