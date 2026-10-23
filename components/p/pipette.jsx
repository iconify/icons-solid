import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lame2ijev.css';
import '../../css/n/nw_9v_bol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lame2ijev"/><path class="nw_9v_bol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:pipette"} {...others} />);
}

export default Component;
