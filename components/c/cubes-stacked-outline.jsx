import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra5zdu2wf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ra5zdu2wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:cubes-stacked-outline"} {...others} />);
}

export default Component;
