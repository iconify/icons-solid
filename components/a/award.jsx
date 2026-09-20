import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uw_10sb5j.css';
import '../../css/i/iclri0b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uw_10sb5j"/><path class="iclri0b-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:award"} {...others} />);
}

export default Component;
