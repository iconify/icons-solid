import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvwlbwmkn.css';
import '../../css/z/zw52su8no.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vvwlbwmkn"/><path class="zw52su8no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lastpass"} {...others} />);
}

export default Component;
