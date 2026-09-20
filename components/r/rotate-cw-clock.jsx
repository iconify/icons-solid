import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bt1wfcb7a.css';
import '../../css/j/jdfa1bchc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bt1wfcb7a"/><path class="jdfa1bchc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rotate-cw-clock"} {...others} />);
}

export default Component;
