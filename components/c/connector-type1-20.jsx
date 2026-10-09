import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_nd-1x5c.css';
import '../../css/x/x6jd1xc0z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e_nd-1x5c"/><path class="x6jd1xc0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-type1-20"} {...others} />);
}

export default Component;
