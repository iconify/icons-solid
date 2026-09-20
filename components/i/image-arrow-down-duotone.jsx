import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhwamkbws.css';
import '../../css/o/ox3sqx-4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhwamkbws"/><path class="ox3sqx-4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-arrow-down-duotone"} {...others} />);
}

export default Component;
