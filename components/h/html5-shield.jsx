import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arq7f-vxj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="arq7f-vxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:html5-shield"} {...others} />);
}

export default Component;
