import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3ju1lujl.css';

const viewBox = {"width":344,"height":384};
const content = `<path class="a3ju1lujl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:plus-1"} {...others} />);
}

export default Component;
