import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ectpqzbth.css';
import '../../css/q/q0od84bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ectpqzbth"/><path class="q0od84bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:pen-tool"} {...others} />);
}

export default Component;
