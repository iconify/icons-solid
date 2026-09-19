import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dq0numbuj.css';
import '../../css/t/tlpz02qyr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="dq0numbuj"/><circle class="tlpz02qyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:crosshair"} {...others} />);
}

export default Component;
