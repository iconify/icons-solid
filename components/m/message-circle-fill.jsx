import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en-8bjbha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="en-8bjbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:message-circle-fill"} {...others} />);
}

export default Component;
