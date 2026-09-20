import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xk62mfeqn.css';
import '../../css/c/ch9pah41i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xk62mfeqn"/><path class="ch9pah41i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-question"} {...others} />);
}

export default Component;
