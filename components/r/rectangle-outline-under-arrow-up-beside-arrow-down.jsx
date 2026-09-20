import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tieppcbwn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tieppcbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:rectangle-outline-under-arrow-up-beside-arrow-down"} {...others} />);
}

export default Component;
