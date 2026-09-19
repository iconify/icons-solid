import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua-shzb5e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ua-shzb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:uppointingredtriangle"} {...others} />);
}

export default Component;
