import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evaij0b3k.css';
import '../../css/z/zknlkb7zg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="evaij0b3k"/><path class="zknlkb7zg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:filters-filled"} {...others} />);
}

export default Component;
