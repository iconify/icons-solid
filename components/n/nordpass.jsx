import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/m/m32r68bkv.css';
import '../../css/u/uinv5kb7l.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="kuf42lb8e"><path class="m32r68bkv"/><path class="uinv5kb7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nordpass"} {...others} />);
}

export default Component;
