import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c6eyadc1h.css';
import '../../css/m/mylof_buk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c6eyadc1h"/><path class="mylof_buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-pointer-sparkles-fill"} {...others} />);
}

export default Component;
