import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zsd-xescs.css';
import '../../css/r/ray9_ac3o.css';
import '../../css/p/pmz80t_au.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zsd-xescs"/><path class="ray9_ac3o"/><path class="pmz80t_au"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ie"} {...others} />);
}

export default Component;
