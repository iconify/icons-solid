import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjeuv2d3b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qjeuv2d3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:skip-end-circle-fill"} {...others} />);
}

export default Component;
