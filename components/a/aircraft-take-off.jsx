import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv7pv6b9m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qv7pv6b9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:aircraft-take-off"} {...others} />);
}

export default Component;
