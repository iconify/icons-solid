import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9i1nc98d.css';

const viewBox = {"width":344,"height":432};
const content = `<path class="u9i1nc98d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:replay-10"} {...others} />);
}

export default Component;
