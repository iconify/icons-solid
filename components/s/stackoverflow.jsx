import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqhu8rbjs.css';

const viewBox = {"width":336,"height":432};
const content = `<path class="uqhu8rbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:stackoverflow"} {...others} />);
}

export default Component;
