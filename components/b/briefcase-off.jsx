import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekp4ad8ng.css';
import '../../css/f/fjgyldote.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ekp4ad8ng"/><path class="fjgyldote"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:briefcase-off"} {...others} />);
}

export default Component;
