import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cyr97l9zo.css';
import '../../css/j/j0uptwbwv.css';
import '../../css/z/zrjmoujkm.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cyr97l9zo"/><path class="j0uptwbwv"/><path class="zrjmoujkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ro"} {...others} />);
}

export default Component;
