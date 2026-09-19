import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p21j9tb-i.css';
import '../../css/v/v3jd2ibls.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="p21j9tb-i"/><path class="v3jd2ibls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pregnant-32w"} {...others} />);
}

export default Component;
