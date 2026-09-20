import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id7n88bmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="id7n88bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:na-line"} {...others} />);
}

export default Component;
