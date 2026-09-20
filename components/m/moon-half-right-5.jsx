import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntitz-80y.css';

const viewBox = {"width":25,"height":25};
const content = `<path clip-rule="evenodd" class="ntitz-80y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:moon-half-right-5"} {...others} />);
}

export default Component;
