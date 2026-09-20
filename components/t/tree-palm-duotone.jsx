import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fw02yrbyd.css';
import '../../css/h/hm730bcel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fw02yrbyd"/><path class="hm730bcel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tree-palm-duotone"} {...others} />);
}

export default Component;
