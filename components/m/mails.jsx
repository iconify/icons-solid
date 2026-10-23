import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uj0yc0bhn.css';
import '../../css/r/rofg8kbhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uj0yc0bhn"/><path class="rofg8kbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:mails"} {...others} />);
}

export default Component;
