import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfz3hpbgd.css';

const viewBox = {"width":384,"height":432};
const content = `<path class="rfz3hpbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:repeat-one"} {...others} />);
}

export default Component;
