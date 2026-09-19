import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk5o7kbjs.css';
import '../../css/v/vem7gutod.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jk5o7kbjs"/><path class="vem7gutod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:circle-measurement"} {...others} />);
}

export default Component;
