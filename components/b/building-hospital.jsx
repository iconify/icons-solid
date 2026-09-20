import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oomfx9bpg.css';
import '../../css/f/fe20j2bpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oomfx9bpg"/><path class="fe20j2bpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-hospital"} {...others} />);
}

export default Component;
