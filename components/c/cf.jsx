import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rehki8kvn.css';
import '../../css/d/d7xvmv0ip.css';
import '../../css/c/cfl7k-b9e.css';
import '../../css/i/ilqy7wboq.css';
import '../../css/e/eqytyfu7c.css';
import '../../css/e/eupkuwbxe.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rehki8kvn"/><path class="d7xvmv0ip"/><path class="cfl7k-b9e"/><path class="ilqy7wboq"/><path class="eqytyfu7c"/><path class="eupkuwbxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:cf"} {...others} />);
}

export default Component;
