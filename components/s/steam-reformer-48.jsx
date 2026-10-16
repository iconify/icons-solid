import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asop52brs.css';
import '../../css/p/pio8nkbyn.css';
import '../../css/h/hiktgyb7l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="asop52brs"/><path class="pio8nkbyn"/><path class="hiktgyb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steam-reformer-48"} {...others} />);
}

export default Component;
