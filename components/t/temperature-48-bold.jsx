import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2nxiyvua.css';
import '../../css/g/gs-niz01e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f2nxiyvua"/><path class="gs-niz01e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:temperature-48-bold"} {...others} />);
}

export default Component;
