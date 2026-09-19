import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz_n-fbes.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tz_n-fbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:prism-outline"} {...others} />);
}

export default Component;
