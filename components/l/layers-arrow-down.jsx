import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ctihzfbwb.css';
import '../../css/t/tnjq61bts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ctihzfbwb"/><path class="tnjq61bts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:layers-arrow-down"} {...others} />);
}

export default Component;
