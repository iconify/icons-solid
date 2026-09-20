import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd1p3qxtl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cd1p3qxtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:button-outline"} {...others} />);
}

export default Component;
