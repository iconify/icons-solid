import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogg4ex6bi.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ogg4ex6bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:place-of-worship"} {...others} />);
}

export default Component;
