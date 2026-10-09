import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/g/gumk70xlz.css';
import '../../css/h/hx0rcmrng.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="gumk70xlz"/><path class="hx0rcmrng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:globe-48-bold"} {...others} />);
}

export default Component;
