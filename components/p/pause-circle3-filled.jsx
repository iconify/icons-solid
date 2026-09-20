import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghtw4bbyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghtw4bbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pause-circle3-filled"} {...others} />);
}

export default Component;
