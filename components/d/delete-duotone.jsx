import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dk-seobxs.css';
import '../../css/q/qu5h3fbqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dk-seobxs"/><path class="qu5h3fbqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:delete-duotone"} {...others} />);
}

export default Component;
