import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yowfujb9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yowfujb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:panel-door-locked"} {...others} />);
}

export default Component;
