import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voiqsdbhk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="voiqsdbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:knife-thrust"} {...others} />);
}

export default Component;
