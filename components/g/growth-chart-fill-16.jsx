import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc5-o5lsl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zc5-o5lsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:growth-chart-fill-16"} {...others} />);
}

export default Component;
