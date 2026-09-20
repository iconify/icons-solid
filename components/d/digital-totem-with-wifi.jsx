import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_whbcc0v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h_whbcc0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:digital-totem-with-wifi"} {...others} />);
}

export default Component;
