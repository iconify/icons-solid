import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwva-4bto.css';
import '../../css/e/e84spf9xe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rwva-4bto"/><path class="e84spf9xe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ticktick"} {...others} />);
}

export default Component;
