import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ki7fwt0ug.css';
import '../../css/r/rvyr4rrtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ki7fwt0ug"/><path class="rvyr4rrtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mic-off"} {...others} />);
}

export default Component;
