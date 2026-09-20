import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd4x_8b_x.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="rd4x_8b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:mention"} {...others} />);
}

export default Component;
