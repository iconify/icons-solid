import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydgc67bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ydgc67bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:project-curve-3d"} {...others} />);
}

export default Component;
