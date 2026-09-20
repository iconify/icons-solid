import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8wox3mct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8wox3mct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:user-follow-2-line"} {...others} />);
}

export default Component;
