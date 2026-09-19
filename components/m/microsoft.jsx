import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-n7bi8nq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e-n7bi8nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:microsoft"} {...others} />);
}

export default Component;
