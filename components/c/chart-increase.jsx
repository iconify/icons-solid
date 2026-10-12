import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bo2nr-8ym.css';
import '../../css/r/r2pc7_j-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bo2nr-8ym"/><path class="r2pc7_j-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-increase"} {...others} />);
}

export default Component;
