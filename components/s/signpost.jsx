import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qc0zm1_pw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="1.75 9.25 12.25 9.25 14.25 7 12.25 4.75 1.75 4.75"/><path class="qc0zm1_pw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:signpost"} {...others} />);
}

export default Component;
