import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsbj687dq.css';
import '../../css/g/gcoi0abmx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tsbj687dq"/><path class="gcoi0abmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:brush-polygon"} {...others} />);
}

export default Component;
