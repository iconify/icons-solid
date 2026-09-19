import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6ig2cc8a.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="e6ig2cc8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:close-circle"} {...others} />);
}

export default Component;
