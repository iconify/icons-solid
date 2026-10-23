import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pd--y1-ct.css';
import '../../css/b/bwcs2jjze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pd--y1-ct"/><path class="bwcs2jjze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clock-arrow-up"} {...others} />);
}

export default Component;
