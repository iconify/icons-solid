import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcxkmt8kn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qcxkmt8kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:devil-mask"} {...others} />);
}

export default Component;
