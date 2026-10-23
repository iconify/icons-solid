import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y_tuupbnv.css';
import '../../css/n/nrw9icd8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y_tuupbnv"/><path class="nrw9icd8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:tv-minimal-play"} {...others} />);
}

export default Component;
