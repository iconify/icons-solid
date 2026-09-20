import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a6cswwz5y.css';
import '../../css/v/vvtt4cclk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a6cswwz5y"/><path class="vvtt4cclk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-capsule"} {...others} />);
}

export default Component;
