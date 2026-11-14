import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qy3-i8bpr.css';
import '../../css/z/z0u70rezh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qy3-i8bpr"/><circle class="z0u70rezh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:camera"} {...others} />);
}

export default Component;
