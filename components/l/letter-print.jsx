import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n9zc5cbms.css';
import '../../css/r/r4hbm720t.css';
import '../../css/a/anypatboj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><rect class="n9zc5cbms"/><path clip-rule="evenodd" class="r4hbm720t"/><path clip-rule="evenodd" class="anypatboj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:letter-print"} {...others} />);
}

export default Component;
