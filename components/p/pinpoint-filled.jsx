import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny8bffbqt.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="ny8bffbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:pinpoint-filled"} {...others} />);
}

export default Component;
