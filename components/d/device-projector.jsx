import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c-lme1bth.css';
import '../../css/b/b4hspab-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c-lme1bth"/><path class="b4hspab-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-projector"} {...others} />);
}

export default Component;
