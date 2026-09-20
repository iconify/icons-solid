import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlxv6j38h.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="zlxv6j38h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:save-12"} {...others} />);
}

export default Component;
