import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8er1hxdx.css';
import '../../css/a/a3f5iab8n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y8er1hxdx"/><path class="a3f5iab8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pricing-tailored"} {...others} />);
}

export default Component;
