import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4s1fkb8q.css';
import '../../css/u/uvc30bbwx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v4s1fkb8q"/><path class="uvc30bbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openadserver-dark"} {...others} />);
}

export default Component;
