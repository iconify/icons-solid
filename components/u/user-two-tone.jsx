import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g3c-3divb.css';
import '../../css/d/d43qybptx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g3c-3divb"/><path class="d43qybptx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-two-tone"} {...others} />);
}

export default Component;
