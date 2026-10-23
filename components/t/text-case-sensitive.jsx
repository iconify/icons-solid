import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e-hl0mo1z.css';
import '../../css/q/qdoez9bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e-hl0mo1z"/><path class="qdoez9bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-case-sensitive"} {...others} />);
}

export default Component;
