import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy0pchbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yy0pchbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:crutches-off"} {...others} />);
}

export default Component;
