import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z3iq_nbdu.css';
import '../../css/f/f18kvd3vp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z3iq_nbdu"/><path class="f18kvd3vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:iteration-cw"} {...others} />);
}

export default Component;
