import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofjs243ce.css';
import '../../css/h/ho71zpbvj.css';
import '../../css/i/idfn3mciq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ofjs243ce"/><path class="ho71zpbvj"/><path class="idfn3mciq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:wine-outline"} {...others} />);
}

export default Component;
