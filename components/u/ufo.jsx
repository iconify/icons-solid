import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oe49qz9fj.css';
import '../../css/b/b0zr17bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oe49qz9fj"/><path class="b0zr17bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ufo"} {...others} />);
}

export default Component;
