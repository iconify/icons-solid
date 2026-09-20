import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t4y67fbcc.css';
import '../../css/u/ug-17ffme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t4y67fbcc"/><path class="ug-17ffme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-x-duotone"} {...others} />);
}

export default Component;
