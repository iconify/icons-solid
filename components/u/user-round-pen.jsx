import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cut8-xx0g.css';
import '../../css/k/kj1m-qm_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cut8-xx0g"/><path class="kj1m-qm_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:user-round-pen"} {...others} />);
}

export default Component;
