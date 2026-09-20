import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if1bcwb2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="if1bcwb2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:notification-alarm-snooze-remix"} {...others} />);
}

export default Component;
