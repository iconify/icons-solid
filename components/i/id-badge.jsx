import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6dc5-vlc.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="x6dc5-vlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:id-badge"} {...others} />);
}

export default Component;
