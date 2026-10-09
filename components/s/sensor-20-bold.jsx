import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd9-7xbqm.css';
import '../../css/i/i_d0_pb7z.css';
import '../../css/q/q73zetbak.css';
import '../../css/x/xkk6mccbi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fd9-7xbqm"/><path class="i_d0_pb7z"/><path class="q73zetbak"/><path class="xkk6mccbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sensor-20-bold"} {...others} />);
}

export default Component;
