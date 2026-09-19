import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq7dhvbqx.css';
import '../../css/p/pf1wtprxb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tq7dhvbqx"/><path class="pf1wtprxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:shipit"} {...others} />);
}

export default Component;
