import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/loqtgpboj.css';
import '../../css/d/dydq24bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="loqtgpboj"/><rect class="dydq24bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:globe-lock"} {...others} />);
}

export default Component;
