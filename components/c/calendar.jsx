import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/toj3ujbtf.css';
import '../../css/z/z9-bgwbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="toj3ujbtf"/><path class="z9-bgwbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:calendar"} {...others} />);
}

export default Component;
