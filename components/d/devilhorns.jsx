import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0-20imgh.css';
import '../../css/k/kqs-8dbyr.css';
import '../../css/k/kz7mlmbof.css';
import '../../css/l/lau2l9j4m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m0-20imgh"/><path class="kqs-8dbyr"/><path class="kz7mlmbof"/><path class="lau2l9j4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:devilhorns"} {...others} />);
}

export default Component;
