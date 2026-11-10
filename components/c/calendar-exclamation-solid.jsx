import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihyzhxboe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ihyzhxboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:calendar-exclamation-solid"} {...others} />);
}

export default Component;
