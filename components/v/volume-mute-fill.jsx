import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk0zo2kay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lk0zo2kay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:volume-mute-fill"} {...others} />);
}

export default Component;
