import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj6b63bfc.css';
import '../../css/j/jiywhnbij.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yj6b63bfc"/><path class="jiywhnbij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chibisafe-light"} {...others} />);
}

export default Component;
