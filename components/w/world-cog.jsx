import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qyd5e-bdr.css';
import '../../css/c/cg6vveb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qyd5e-bdr"/><path class="cg6vveb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-cog"} {...others} />);
}

export default Component;
