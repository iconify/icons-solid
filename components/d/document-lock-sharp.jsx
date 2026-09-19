import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6d2y6bir.css';
import '../../css/x/x1kizjb8a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u6d2y6bir"/><path class="x1kizjb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:document-lock-sharp"} {...others} />);
}

export default Component;
