import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e39ud6bwf.css';
import '../../css/r/rhygotbxm.css';
import '../../css/d/d_xxxv6_c.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="e39ud6bwf"/><path class="rhygotbxm"/><path class="d_xxxv6_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cube-view"} {...others} />);
}

export default Component;
