import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjven60rw.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="zjven60rw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:five-of-circles-mahjong-filled"} {...others} />);
}

export default Component;
