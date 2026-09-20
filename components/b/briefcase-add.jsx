import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rram23-dq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rram23-dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:briefcase-add"} {...others} />);
}

export default Component;
