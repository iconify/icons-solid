import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy7pxvbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fy7pxvbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sort-ascending-2"} {...others} />);
}

export default Component;
