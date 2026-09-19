import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpfw_zbye.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jpfw_zbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bounding-box-circles"} {...others} />);
}

export default Component;
