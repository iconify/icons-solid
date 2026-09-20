import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ccgyu3b2d.css';
import '../../css/a/ao72s3b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ccgyu3b2d"/><path class="ao72s3b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:car-off"} {...others} />);
}

export default Component;
