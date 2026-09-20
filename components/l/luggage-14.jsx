import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur6p-47xu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ur6p-47xu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:luggage-14"} {...others} />);
}

export default Component;
