import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k6xn_-bgv.css';
import '../../css/v/vzrts4uth.css';
import '../../css/h/h1i0elb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k6xn_-bgv"/><circle class="vzrts4uth"/><path class="h1i0elb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:projector"} {...others} />);
}

export default Component;
