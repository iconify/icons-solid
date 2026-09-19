import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv4kqqbfi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hv4kqqbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:concentric-crescents"} {...others} />);
}

export default Component;
