import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/op0hutb2r.css';
import '../../css/r/r4nu2xy8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="op0hutb2r"/><path class="r4nu2xy8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:dome"} {...others} />);
}

export default Component;
