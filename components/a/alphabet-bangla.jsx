import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qabm15fef.css';
import '../../css/k/kpj13lb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qabm15fef"/><path class="kpj13lb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alphabet-bangla"} {...others} />);
}

export default Component;
