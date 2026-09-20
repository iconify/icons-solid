import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7b2ktb8d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h7b2ktb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:keepassxc-light"} {...others} />);
}

export default Component;
