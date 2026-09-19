import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeu84ubtp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xeu84ubtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:wave-pulse-1"} {...others} />);
}

export default Component;
