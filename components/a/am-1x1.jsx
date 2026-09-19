import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-v7pcchz.css';
import '../../css/j/j-g4lup5t.css';
import '../../css/m/m7z06s_0u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t-v7pcchz"/><path class="j-g4lup5t"/><path class="m7z06s_0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:am-1x1"} {...others} />);
}

export default Component;
