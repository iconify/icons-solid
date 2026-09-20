import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxjr2k8yj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gxjr2k8yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:imac"} {...others} />);
}

export default Component;
