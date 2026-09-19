import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4m2sp3ml.css';
import '../../css/h/hypk8gbio.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="s4m2sp3ml"/><path class="hypk8gbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:stop-sign"} {...others} />);
}

export default Component;
