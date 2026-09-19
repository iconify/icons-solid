import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viyk3hb3u.css';
import '../../css/r/rqvdmjbks.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="viyk3hb3u"/><path class="rqvdmjbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mobile-session"} {...others} />);
}

export default Component;
