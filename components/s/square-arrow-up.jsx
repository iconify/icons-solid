import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aq4fvy5jc.css';
import '../../css/r/r1ol8bhge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aq4fvy5jc"/><path class="r1ol8bhge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-arrow-up"} {...others} />);
}

export default Component;
