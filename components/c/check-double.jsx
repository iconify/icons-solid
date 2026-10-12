import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nz8yb6bgn.css';
import '../../css/h/huw3i8bmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nz8yb6bgn"/><path class="huw3i8bmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:check-double"} {...others} />);
}

export default Component;
