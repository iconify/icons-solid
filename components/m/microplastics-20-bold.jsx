import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_hvfxj7d.css';
import '../../css/q/q7snb2uzc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s_hvfxj7d"/><path class="q7snb2uzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microplastics-20-bold"} {...others} />);
}

export default Component;
