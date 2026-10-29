import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fvsrwbc4v.css';
import '../../css/n/nsxj8k18x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fvsrwbc4v"/><path class="nsxj8k18x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:guitar"} {...others} />);
}

export default Component;
