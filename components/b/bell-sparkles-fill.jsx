import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3_36ub_x.css';
import '../../css/j/j88tl2bfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n3_36ub_x"/><path class="j88tl2bfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-sparkles-fill"} {...others} />);
}

export default Component;
