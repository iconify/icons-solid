import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-_s6jc1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p-_s6jc1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:neon-open"} {...others} />);
}

export default Component;
