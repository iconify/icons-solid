import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vopump9wh.css';
import '../../css/i/i8u0ttp-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vopump9wh"/><path class="i8u0ttp-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:id-card"} {...others} />);
}

export default Component;
