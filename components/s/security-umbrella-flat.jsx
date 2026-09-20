import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p4hsu1cam.css';
import '../../css/n/nf6h_omja.css';
import '../../css/n/ncufwjbwc.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="p4hsu1cam"/><path class="nf6h_omja"/><path class="ncufwjbwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:security-umbrella-flat"} {...others} />);
}

export default Component;
