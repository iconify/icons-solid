import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0_ge5bwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p0_ge5bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:corner-up-left-solid"} {...others} />);
}

export default Component;
