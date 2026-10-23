import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uhfwh4bpb.css';
import '../../css/l/l5dry7bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uhfwh4bpb"/><path class="l5dry7bxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:radio-receiver"} {...others} />);
}

export default Component;
