import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rpl-55ojt.css';
import '../../css/u/ua74jdbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rpl-55ojt"/><path class="ua74jdbgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:logout-expressive"} {...others} />);
}

export default Component;
