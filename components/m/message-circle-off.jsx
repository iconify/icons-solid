import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgsdc4wap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgsdc4wap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-circle-off"} {...others} />);
}

export default Component;
