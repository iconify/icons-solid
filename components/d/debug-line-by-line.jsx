import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0l5uqr_q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k0l5uqr_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:debug-line-by-line"} {...others} />);
}

export default Component;
