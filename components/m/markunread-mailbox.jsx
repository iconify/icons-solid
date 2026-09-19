import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-7gfo8if.css';

const viewBox = {"width":432,"height":472};
const content = `<path class="h-7gfo8if"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:markunread-mailbox"} {...others} />);
}

export default Component;
