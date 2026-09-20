import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjqfv50gi.css';
import '../../css/j/j866dzgsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mjqfv50gi"/><path class="j866dzgsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-up-right-box-duotone"} {...others} />);
}

export default Component;
