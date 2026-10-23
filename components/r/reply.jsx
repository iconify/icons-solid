import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ocf82hddh.css';
import '../../css/t/twsf6obea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ocf82hddh"/><path class="twsf6obea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:reply"} {...others} />);
}

export default Component;
