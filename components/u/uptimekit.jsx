import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkei5sq7u.css';
import '../../css/q/qy8hd1btp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vkei5sq7u"/><path class="qy8hd1btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptimekit"} {...others} />);
}

export default Component;
