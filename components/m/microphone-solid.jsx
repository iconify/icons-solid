import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc10j4kob.css';
import '../../css/t/tw4lkvbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc10j4kob"/><path class="tw4lkvbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:microphone-solid"} {...others} />);
}

export default Component;
