import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y20ik4bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y20ik4bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:boom-box-line"} {...others} />);
}

export default Component;
