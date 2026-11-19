import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8chi8vcx.css';
import '../../css/r/rsx-5p5ch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y8chi8vcx"/><path class="rsx-5p5ch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-quadrant"} {...others} />);
}

export default Component;
