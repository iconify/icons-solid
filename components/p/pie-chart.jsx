import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnm6bw1lg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vnm6bw1lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pie-chart"} {...others} />);
}

export default Component;
