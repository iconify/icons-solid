import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kunn4ubvb.css';
import '../../css/t/tils3-_7p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="kunn4ubvb"/><path class="tils3-_7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:duplicate"} {...others} />);
}

export default Component;
