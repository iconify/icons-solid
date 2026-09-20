import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vundi_b1g.css';
import '../../css/z/zqqdl4nxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vundi_b1g"/><path class="zqqdl4nxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:navigate-duotone"} {...others} />);
}

export default Component;
