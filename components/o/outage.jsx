import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksos72b1n.css';
import '../../css/d/drkyefbiz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ksos72b1n"/><path class="drkyefbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:outage"} {...others} />);
}

export default Component;
