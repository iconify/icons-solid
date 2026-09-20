import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmn6vv7gz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rmn6vv7gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:mention-24"} {...others} />);
}

export default Component;
