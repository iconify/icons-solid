import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmdv5sb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmdv5sb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:thumbs-down"} {...others} />);
}

export default Component;
