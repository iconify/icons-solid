import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji2bvvmog.css';
import '../../css/c/ctgububiy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ji2bvvmog"/><path class="ctgububiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:calculation-alt"} {...others} />);
}

export default Component;
