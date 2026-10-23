import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo8emyggg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo8emyggg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-arrow-out-down-right"} {...others} />);
}

export default Component;
