import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg9mmgber.css';

const viewBox = {"width":512,"height":384};
const content = `<path class="yg9mmgber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:plus-circle-o-duplicate"} {...others} />);
}

export default Component;
