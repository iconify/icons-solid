import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nwy40kvrr.css';
import '../../css/h/h9vnbdbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nwy40kvrr"/><path class="h9vnbdbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:battery-charging"} {...others} />);
}

export default Component;
