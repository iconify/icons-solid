import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1hyo6bsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b1hyo6bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ard-alpha"} {...others} />);
}

export default Component;
