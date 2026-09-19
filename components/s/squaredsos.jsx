import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyr2jybbi.css';
import '../../css/c/cu-wwpbhr.css';
import '../../css/k/ky8qmjbbp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cyr2jybbi"/><path class="cu-wwpbhr"/><path class="ky8qmjbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:squaredsos"} {...others} />);
}

export default Component;
