import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwwpx0b3d.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hwwpx0b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:wheel"} {...others} />);
}

export default Component;
