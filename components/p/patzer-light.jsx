import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmoj0pv_m.css';
import '../../css/m/ml0m__bfx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nmoj0pv_m"/><path class="ml0m__bfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:patzer-light"} {...others} />);
}

export default Component;
