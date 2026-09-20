import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q3wbegbdg.css';
import '../../css/k/kp59etbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q3wbegbdg"/><path class="kp59etbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-back-up"} {...others} />);
}

export default Component;
