import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ori6jp11a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ori6jp11a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ranch-gate"} {...others} />);
}

export default Component;
