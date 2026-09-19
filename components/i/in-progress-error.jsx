import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c55vgcbjc.css';
import '../../css/n/n-obmabwf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c55vgcbjc"/><path class="n-obmabwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:in-progress-error"} {...others} />);
}

export default Component;
