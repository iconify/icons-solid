import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yw3lpkbij.css';
import '../../css/o/ox_05kl4h.css';
import '../../css/g/gz6_t9bsf.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yw3lpkbij"/><path class="ox_05kl4h"/><path class="gz6_t9bsf"/><path class="ju8v6k8zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-question-two-tone"} {...others} />);
}

export default Component;
