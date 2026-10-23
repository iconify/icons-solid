import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/osu3clbek.css';
import '../../css/q/q_niqwe6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="osu3clbek"/><path class="q_niqwe6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-case-kebab"} {...others} />);
}

export default Component;
