import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m-pr96kgv.css';
import '../../css/k/kmjw4165b.css';
import '../../css/j/jtpo4t6rz.css';
import '../../css/e/eywdkpbyj.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m-pr96kgv"/><path class="kmjw4165b"/><path class="jtpo4t6rz"/><path class="eywdkpbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-hospital-outline"} {...others} />);
}

export default Component;
