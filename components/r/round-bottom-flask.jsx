import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0_f5vtuw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h0_f5vtuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:round-bottom-flask"} {...others} />);
}

export default Component;
