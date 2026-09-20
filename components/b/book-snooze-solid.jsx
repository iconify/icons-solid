import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7sfh3a7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q7sfh3a7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:book-snooze-solid"} {...others} />);
}

export default Component;
