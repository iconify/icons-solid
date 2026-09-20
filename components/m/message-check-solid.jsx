import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx0ez053t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sx0ez053t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:message-check-solid"} {...others} />);
}

export default Component;
