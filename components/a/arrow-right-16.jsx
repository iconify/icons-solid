import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmm9cxber.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lmm9cxber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:arrow-right-16"} {...others} />);
}

export default Component;
