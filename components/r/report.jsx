import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aedxwpvkb.css';
import '../../css/y/y49xkx6yn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aedxwpvkb"/><path class="y49xkx6yn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:report"} {...others} />);
}

export default Component;
