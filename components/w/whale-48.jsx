import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2jjx11ma.css';
import '../../css/v/vikp09bur.css';
import '../../css/o/o2pbh_bbb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p2jjx11ma"/><path class="vikp09bur"/><path class="o2pbh_bbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whale-48"} {...others} />);
}

export default Component;
