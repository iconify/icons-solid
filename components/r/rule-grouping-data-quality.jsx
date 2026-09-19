import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_s7ombqu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b_s7ombqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rule-grouping-data-quality"} {...others} />);
}

export default Component;
