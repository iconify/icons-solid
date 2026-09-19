import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb9hnubnd.css';

const viewBox = {"width":384,"height":432};
const content = `<path class="cb9hnubnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:bluetooth-connected"} {...others} />);
}

export default Component;
