import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/se39f-ucb.css';
import '../../css/g/g7n8nl8gy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="se39f-ucb"/><path class="g7n8nl8gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refresh-cw-sparkles-fill"} {...others} />);
}

export default Component;
