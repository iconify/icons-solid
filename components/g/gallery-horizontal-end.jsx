import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lx0hu2y6h.css';
import '../../css/e/e2jxp-o6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lx0hu2y6h"/><rect class="e2jxp-o6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:gallery-horizontal-end"} {...others} />);
}

export default Component;
