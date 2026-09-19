import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxsk1y4aw.css';
import '../../css/f/fuq627b0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxsk1y4aw"/><path class="fuq627b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-right-stroke-circle"} {...others} />);
}

export default Component;
