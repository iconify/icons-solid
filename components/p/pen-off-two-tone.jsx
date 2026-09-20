import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ymwuqkrmm.css';
import '../../css/x/x5hmubb-n.css';
import '../../css/m/m7-i0ybpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ymwuqkrmm"/><path class="x5hmubb-n"/><path class="m7-i0ybpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pen-off-two-tone"} {...others} />);
}

export default Component;
