import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc-a-nvsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yc-a-nvsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gnu-bash"} {...others} />);
}

export default Component;
