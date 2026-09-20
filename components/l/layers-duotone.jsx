import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5zc1vb8y.css';
import '../../css/d/d8meufkqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s5zc1vb8y"/><path class="d8meufkqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:layers-duotone"} {...others} />);
}

export default Component;
