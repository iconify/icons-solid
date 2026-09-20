import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nhrqm3bvg.css';
import '../../css/i/ihq4x_rby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nhrqm3bvg"/><path class="ihq4x_rby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-adonis-js"} {...others} />);
}

export default Component;
