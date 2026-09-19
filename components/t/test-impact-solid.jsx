import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4l_6bc_j.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="k4l_6bc_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:test-impact-solid"} {...others} />);
}

export default Component;
