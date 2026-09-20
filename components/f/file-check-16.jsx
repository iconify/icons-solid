import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9nn-b3_g.css';
import '../../css/p/p6k-85b8h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x9nn-b3_g"/><path class="p6k-85b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-check-16"} {...others} />);
}

export default Component;
