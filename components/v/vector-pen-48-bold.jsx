import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po8mu36tw.css';
import '../../css/x/xkmiijbwh.css';
import '../../css/d/dxjaq9byh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="po8mu36tw"/><path class="xkmiijbwh"/><path class="dxjaq9byh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vector-pen-48-bold"} {...others} />);
}

export default Component;
