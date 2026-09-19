import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6g3u8wjy.css';
import '../../css/u/ughd8vbtx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c6g3u8wjy"/><path class="ughd8vbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ice-cream"} {...others} />);
}

export default Component;
