import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a517a_nqs.css';
import '../../css/a/as6fsnbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a517a_nqs"/><path class="as6fsnbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:traffic-cone-duocolor-round"} {...others} />);
}

export default Component;
