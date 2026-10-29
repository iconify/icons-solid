import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t3rrtrv_m.css';
import '../../css/n/nm0nw7bwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t3rrtrv_m"/><path class="nm0nw7bwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:redo-dot"} {...others} />);
}

export default Component;
