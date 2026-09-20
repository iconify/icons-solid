import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grg7xwilx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="grg7xwilx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:profile-fill"} {...others} />);
}

export default Component;
