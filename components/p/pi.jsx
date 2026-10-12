import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iug5p656n.css';
import '../../css/u/uk3sd_5em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iug5p656n"/><path class="uk3sd_5em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pi"} {...others} />);
}

export default Component;
