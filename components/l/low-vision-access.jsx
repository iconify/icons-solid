import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhs7z7x8k.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="lhs7z7x8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:low-vision-access"} {...others} />);
}

export default Component;
