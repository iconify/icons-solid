import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n6fizubqr.css';
import '../../css/u/uzga3ib4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n6fizubqr"/><path class="uzga3ib4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fast-forward"} {...others} />);
}

export default Component;
