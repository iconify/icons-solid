import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/friknfboq.css';
import '../../css/v/v3-yombvq.css';
import '../../css/v/v403anbqu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="friknfboq"/><path class="v3-yombvq"/><path class="v403anbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:feed-in-48"} {...others} />);
}

export default Component;
