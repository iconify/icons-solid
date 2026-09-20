import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6tj6cbbx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s6tj6cbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:2fauth-light"} {...others} />);
}

export default Component;
