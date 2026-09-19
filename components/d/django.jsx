import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9lvgqbix.css';
import '../../css/z/z5465t_tb.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="v9lvgqbix"/><path class="z5465t_tb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:django"} {...others} />);
}

export default Component;
