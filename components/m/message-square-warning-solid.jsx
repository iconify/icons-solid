import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms3qmbcdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ms3qmbcdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-warning-solid"} {...others} />);
}

export default Component;
