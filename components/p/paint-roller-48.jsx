import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x813rhndo.css';
import '../../css/n/nvr1vcb4k.css';
import '../../css/b/bc-b47bac.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x813rhndo"/><path class="nvr1vcb4k"/><path class="bc-b47bac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paint-roller-48"} {...others} />);
}

export default Component;
