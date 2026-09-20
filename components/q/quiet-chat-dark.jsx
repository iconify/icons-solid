import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpt-vi5dt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qpt-vi5dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quiet-chat-dark"} {...others} />);
}

export default Component;
