import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3jjpgbqp.css';
import '../../css/r/rvcx90b2h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d3jjpgbqp"/><path clip-rule="evenodd" class="rvcx90b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:view-page-facing-16"} {...others} />);
}

export default Component;
