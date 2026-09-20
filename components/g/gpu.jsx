import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/egh63e3ag.css';
import '../../css/q/q0lpnzbze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="egh63e3ag"/><path class="q0lpnzbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gpu"} {...others} />);
}

export default Component;
