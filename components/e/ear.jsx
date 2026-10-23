import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/woutedbwf.css';
import '../../css/s/s_jwn-bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="woutedbwf"/><path class="s_jwn-bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ear"} {...others} />);
}

export default Component;
