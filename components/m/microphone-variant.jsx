import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4hmvzbku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4hmvzbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:microphone-variant"} {...others} />);
}

export default Component;
