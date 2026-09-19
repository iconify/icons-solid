import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fvr9ntbch.css';
import '../../css/x/xtg752nvh.css';
import '../../css/a/asv4z3b0w.css';
import '../../css/b/bh8uixr5c.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fvr9ntbch"/><path class="xtg752nvh"/><path class="asv4z3b0w"/><path class="bh8uixr5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ls"} {...others} />);
}

export default Component;
