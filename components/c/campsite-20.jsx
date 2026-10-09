import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c259fp7uq.css';
import '../../css/r/rf7gwnj9m.css';
import '../../css/x/xvxiwibyx.css';
import '../../css/v/vzsiftpbh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c259fp7uq"/><path class="rf7gwnj9m"/><path class="xvxiwibyx"/><path class="vzsiftpbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:campsite-20"} {...others} />);
}

export default Component;
