import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfrailbbe.css';
import '../../css/d/djfpcjb0d.css';
import '../../css/o/ou4wxlfes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tfrailbbe"/><path class="djfpcjb0d"/><path class="ou4wxlfes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:reorder2-duotone"} {...others} />);
}

export default Component;
