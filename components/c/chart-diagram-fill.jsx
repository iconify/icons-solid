import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ot94w_q7u.css';
import '../../css/g/gu4-r2bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ot94w_q7u"/><path class="gu4-r2bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-diagram-fill"} {...others} />);
}

export default Component;
