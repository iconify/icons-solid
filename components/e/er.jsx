import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/msqbht_3s.css';
import '../../css/l/ly148kbmp.css';
import '../../css/z/z9ptkzzsm.css';
import '../../css/v/vihk52k_j.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="msqbht_3s"/><path class="ly148kbmp"/><path class="z9ptkzzsm"/><path class="vihk52k_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:er"} {...others} />);
}

export default Component;
