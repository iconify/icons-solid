import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ufh2b_u1x.css';
import '../../css/e/evssnjb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ufh2b_u1x"/><path class="evssnjb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:playing-cards"} {...others} />);
}

export default Component;
