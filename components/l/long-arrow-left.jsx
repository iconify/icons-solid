import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bys7cd0-o.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="bys7cd0-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:long-arrow-left"} {...others} />);
}

export default Component;
