import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8div7b-m.css';
import '../../css/p/placboblb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z8div7b-m"/><path class="placboblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soda-can-48"} {...others} />);
}

export default Component;
