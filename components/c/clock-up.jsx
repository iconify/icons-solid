import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vs8spcu1y.css';
import '../../css/t/tmjdz4bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vs8spcu1y"/><path class="tmjdz4bhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-up"} {...others} />);
}

export default Component;
