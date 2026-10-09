import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/friknfboq.css';
import '../../css/e/etv5vpb9k.css';
import '../../css/p/py1903b1t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="friknfboq"/><path class="etv5vpb9k"/><path class="py1903b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:export-limit-48"} {...others} />);
}

export default Component;
