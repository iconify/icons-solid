import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t41rjyaqq.css';

const viewBox = {"width":432,"height":400};
const content = `<path class="t41rjyaqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:portable-wifi"} {...others} />);
}

export default Component;
