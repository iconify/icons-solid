import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8g0h1ijq.css';
import '../../css/p/p1q-3bbhj.css';
import '../../css/q/q51og98ej.css';
import '../../css/t/tze0h7nir.css';
import '../../css/k/kqbu62bxe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v8g0h1ijq"/><path class="p1q-3bbhj"/><path class="q51og98ej"/><path class="tze0h7nir"/><path class="kqbu62bxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-access-light"} {...others} />);
}

export default Component;
