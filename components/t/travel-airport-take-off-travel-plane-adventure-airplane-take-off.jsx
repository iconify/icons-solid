import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edgr8yixw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="edgr8yixw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-airport-take-off-travel-plane-adventure-airplane-take-off"} {...others} />);
}

export default Component;
