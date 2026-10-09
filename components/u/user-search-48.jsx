import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6otzvulu.css';
import '../../css/g/gczovap1t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h6otzvulu"/><path class="gczovap1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-search-48"} {...others} />);
}

export default Component;
