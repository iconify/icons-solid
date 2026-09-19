import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inlhb1gzv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="inlhb1gzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:arrow-thick-to-top"} {...others} />);
}

export default Component;
