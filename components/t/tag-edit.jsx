import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njg7ipjzz.css';
import '../../css/s/sodj30gif.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="njg7ipjzz"/><path class="sodj30gif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tag-edit"} {...others} />);
}

export default Component;
