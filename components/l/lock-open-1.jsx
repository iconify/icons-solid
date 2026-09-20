import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li8oa0riw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="li8oa0riw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:lock-open-1"} {...others} />);
}

export default Component;
