import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdltw8kvl.css';
import '../../css/x/x-t9vyu4u.css';
import '../../css/m/mdhfcqbdq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rdltw8kvl"/><path class="x-t9vyu4u"/><path class="mdhfcqbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-pitch-48-bold"} {...others} />);
}

export default Component;
