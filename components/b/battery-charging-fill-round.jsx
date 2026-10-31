import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy_bwvbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zy_bwvbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:battery-charging-fill-round"} {...others} />);
}

export default Component;
