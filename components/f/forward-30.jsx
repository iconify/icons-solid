import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b__ieh4fk.css';

const viewBox = {"width":344,"height":432};
const content = `<path class="b__ieh4fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:forward-30"} {...others} />);
}

export default Component;
