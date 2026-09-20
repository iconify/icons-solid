import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dix33kbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dix33kbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:fat-corner-right-down-solid"} {...others} />);
}

export default Component;
