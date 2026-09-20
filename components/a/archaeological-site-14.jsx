import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czr71fe0h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="czr71fe0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:archaeological-site-14"} {...others} />);
}

export default Component;
