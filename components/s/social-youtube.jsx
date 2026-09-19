import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aif_2qd2x.css';
import '../../css/j/jiz-qyxew.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="aif_2qd2x"/><path class="jiz-qyxew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-youtube"} {...others} />);
}

export default Component;
