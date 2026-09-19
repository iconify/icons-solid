import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l-nvvtu9k.css';
import '../../css/c/cj9i99glq.css';
import '../../css/z/z1k0_nbcc.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="l-nvvtu9k"/><path class="cj9i99glq"/><path class="z1k0_nbcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ba"} {...others} />);
}

export default Component;
