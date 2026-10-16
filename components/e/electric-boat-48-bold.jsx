import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdtvt3bkl.css';
import '../../css/l/l1gaefbhe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gdtvt3bkl"/><path class="l1gaefbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-boat-48-bold"} {...others} />);
}

export default Component;
