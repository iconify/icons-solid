import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2vpy-vhj.css';

const viewBox = {"width":1026,"height":771};
const content = `<path class="v2vpy-vhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:webinsta"} {...others} />);
}

export default Component;
