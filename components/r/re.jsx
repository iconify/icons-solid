import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uoqau0b3r.css';
import '../../css/z/zrjmoujkm.css';
import '../../css/p/pmz80t_au.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="uoqau0b3r"/><path class="zrjmoujkm"/><path class="pmz80t_au"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:re"} {...others} />);
}

export default Component;
