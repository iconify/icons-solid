import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/msc4dob4r.css';
import '../../css/z/zti0o8bjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="msc4dob4r"/><path class="zti0o8bjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-1-duocolor-round"} {...others} />);
}

export default Component;
