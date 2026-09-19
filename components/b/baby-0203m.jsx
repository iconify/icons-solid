import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ak_zvabur.css';
import '../../css/j/j67i8-bvf.css';
import '../../css/f/fn18_zbuh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ak_zvabur"/><path clip-rule="evenodd" class="j67i8-bvf"/><path class="fn18_zbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-0203m"} {...others} />);
}

export default Component;
