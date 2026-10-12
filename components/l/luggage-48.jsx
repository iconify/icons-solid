import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuj2oe5ct.css';
import '../../css/s/sf2s86-6l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xuj2oe5ct"/><path class="sf2s86-6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:luggage-48"} {...others} />);
}

export default Component;
