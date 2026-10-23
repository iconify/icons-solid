import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q2496xh2m.css';
import '../../css/o/oo4hkjbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q2496xh2m"/><path class="oo4hkjbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:redo-dot"} {...others} />);
}

export default Component;
