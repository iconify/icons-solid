import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws4hu2e0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ws4hu2e0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:caret-up-circle"} {...others} />);
}

export default Component;
