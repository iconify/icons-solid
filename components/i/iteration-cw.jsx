import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azdvjnnhi.css';
import '../../css/r/rfrj_ac_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="azdvjnnhi"/><path class="rfrj_ac_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:iteration-cw"} {...others} />);
}

export default Component;
