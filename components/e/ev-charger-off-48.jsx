import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6awtztgo.css';
import '../../css/i/i_htz80rx.css';
import '../../css/p/p7kyn66pi.css';
import '../../css/y/y-u291bfo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s6awtztgo"/><path class="i_htz80rx"/><path class="p7kyn66pi"/><path class="y-u291bfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-off-48"} {...others} />);
}

export default Component;
