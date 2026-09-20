import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0cq1fbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0cq1fbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:mouse-move-down"} {...others} />);
}

export default Component;
