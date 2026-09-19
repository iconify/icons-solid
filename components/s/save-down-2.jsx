import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4f69cbip.css';
import '../../css/p/paxrevb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y4f69cbip"/><path class="paxrevb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:save-down-2"} {...others} />);
}

export default Component;
