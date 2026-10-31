import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zaxhg3e5y.css';
import '../../css/p/ps0mh7bvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zaxhg3e5y"/><path class="ps0mh7bvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:underline-duocolor-round"} {...others} />);
}

export default Component;
