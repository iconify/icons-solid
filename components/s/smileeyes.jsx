import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsd7b4a3r.css';
import '../../css/m/m6rsfj-rl.css';
import '../../css/a/a065enb7i.css';
import '../../css/r/ru0xozsfr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tsd7b4a3r"/><path class="m6rsfj-rl"/><path class="a065enb7i"/><path class="ru0xozsfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:smileeyes"} {...others} />);
}

export default Component;
