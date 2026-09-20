import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2g407byi.css';
import '../../css/m/m7wldfb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w2g407byi"/><path class="m7wldfb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:unread-24"} {...others} />);
}

export default Component;
