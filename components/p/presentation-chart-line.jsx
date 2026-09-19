import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4dnmpbrh.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="r4dnmpbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:presentation-chart-line"} {...others} />);
}

export default Component;
