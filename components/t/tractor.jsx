import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zjj76nbck.css';
import '../../css/a/ap_dl2buk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zjj76nbck"/><path class="ap_dl2buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:tractor"} {...others} />);
}

export default Component;
