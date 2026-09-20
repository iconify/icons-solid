import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cd1m6pb_c.css';
import '../../css/z/z2-gbos-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cd1m6pb_c"/><path class="z2-gbos-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:database-two-tone"} {...others} />);
}

export default Component;
