import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykan6rbxc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ykan6rbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ticc-dash-dark"} {...others} />);
}

export default Component;
