import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v14mwhsip.css';
import '../../css/t/t2f0b6xyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v14mwhsip"/><path class="t2f0b6xyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:face-slightly-smiling-plus"} {...others} />);
}

export default Component;
