import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu4ps270m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mu4ps270m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:milk-carton-and-apple-and-peso"} {...others} />);
}

export default Component;
