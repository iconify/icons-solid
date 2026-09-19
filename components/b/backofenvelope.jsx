import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6jby-byc.css';
import '../../css/m/m32igq_in.css';
import '../../css/k/kf81dz8xu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i6jby-byc"/><path class="m32igq_in"/><path class="kf81dz8xu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:backofenvelope"} {...others} />);
}

export default Component;
