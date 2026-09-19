import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr79zmb6s.css';
import '../../css/j/jdsu42b0b.css';
import '../../css/n/n412juyes.css';
import '../../css/v/vk54hubeq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cr79zmb6s"/><circle class="jdsu42b0b"/><path class="n412juyes"/><path class="vk54hubeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cd-create-archive"} {...others} />);
}

export default Component;
