import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqu-oue1m.css';
import '../../css/e/exfwqbcbu.css';
import '../../css/f/f_6flzb3p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lqu-oue1m"/><path class="exfwqbcbu"/><path class="f_6flzb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coffee-machine-48-bold"} {...others} />);
}

export default Component;
