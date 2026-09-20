import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iihrjxbhb.css';

const viewBox = {"width":684,"height":1568};
const content = `<path class="iihrjxbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:ralph-lauren"} {...others} />);
}

export default Component;
