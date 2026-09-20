import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r2yv94b2m.css';
import '../../css/l/lxldchbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r2yv94b2m"/><path class="lxldchbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-plus"} {...others} />);
}

export default Component;
