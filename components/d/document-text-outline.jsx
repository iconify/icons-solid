import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z07rjrbqz.css';
import '../../css/v/v5_5mr8sa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z07rjrbqz"/><path class="v5_5mr8sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:document-text-outline"} {...others} />);
}

export default Component;
