import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmo9a1bwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmo9a1bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:send-horizontal"} {...others} />);
}

export default Component;
