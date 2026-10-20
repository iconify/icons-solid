import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxvbik02p.css';
import '../../css/m/m6b4vpcmb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wxvbik02p"/><path class="m6b4vpcmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-heart-20-bold"} {...others} />);
}

export default Component;
