import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf7o7sb5z.css';
import '../../css/s/shn1ydbrw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gf7o7sb5z"/><path class="shn1ydbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fish-ladder-48-bold"} {...others} />);
}

export default Component;
