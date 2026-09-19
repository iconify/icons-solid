import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/temo6clri.css';
import '../../css/j/j052408uz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="temo6clri"/><path class="j052408uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:tablet-portrait"} {...others} />);
}

export default Component;
