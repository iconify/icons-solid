import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytibtjceb.css';
import '../../css/z/zb00v0bqq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ytibtjceb"/><path class="zb00v0bqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:video-player"} {...others} />);
}

export default Component;
