import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvop7d4le.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zvop7d4le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:zigzag-tune"} {...others} />);
}

export default Component;
