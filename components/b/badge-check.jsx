import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dtub6__pa.css';
import '../../css/g/gdsr9obam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dtub6__pa"/><path class="gdsr9obam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:badge-check"} {...others} />);
}

export default Component;
