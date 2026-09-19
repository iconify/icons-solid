import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7t5znbaw.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="n7t5znbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:map-marker-alt"} {...others} />);
}

export default Component;
