import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzgf6_ocr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zzgf6_ocr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:overmind"} {...others} />);
}

export default Component;
