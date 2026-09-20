import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi_pi4bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yi_pi4bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:chevron-down-24"} {...others} />);
}

export default Component;
