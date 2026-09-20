import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbh-7tfuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xbh-7tfuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:video-off-line"} {...others} />);
}

export default Component;
