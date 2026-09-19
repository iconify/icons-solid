import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhlw3db6w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qhlw3db6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:shield-echoes"} {...others} />);
}

export default Component;
