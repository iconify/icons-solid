import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aft-_hbdu.css';
import '../../css/i/i-s48fubu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aft-_hbdu"/><path class="i-s48fubu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soldering-iron-48-bold"} {...others} />);
}

export default Component;
