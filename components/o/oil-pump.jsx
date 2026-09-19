import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6z_jvbsv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p6z_jvbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:oil-pump"} {...others} />);
}

export default Component;
