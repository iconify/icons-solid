import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzhvztb2z.css';
import '../../css/q/q44zm2bli.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pzhvztb2z"/><path class="q44zm2bli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:presentation-file"} {...others} />);
}

export default Component;
