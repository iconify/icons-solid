import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/koswg3-pd.css';
import '../../css/v/vzc9z3b4i.css';
import '../../css/f/fcv3ivblv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="koswg3-pd"/><path class="vzc9z3b4i"/><path clip-rule="evenodd" class="fcv3ivblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:umbrella-print"} {...others} />);
}

export default Component;
