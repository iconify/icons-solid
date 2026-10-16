import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/effq2ibhl.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="effq2ibhl"/><path class="yfoxxnbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smog-20-bold"} {...others} />);
}

export default Component;
