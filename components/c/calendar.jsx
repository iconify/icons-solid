import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2fh9zbkx.css';
import '../../css/k/kwok6nb8d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="p2fh9zbkx"/><path class="kwok6nb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:calendar"} {...others} />);
}

export default Component;
