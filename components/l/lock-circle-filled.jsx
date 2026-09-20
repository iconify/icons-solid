import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icp0bh29j.css';
import '../../css/v/vmbvg6bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="icp0bh29j"/><path class="vmbvg6bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lock-circle-filled"} {...others} />);
}

export default Component;
