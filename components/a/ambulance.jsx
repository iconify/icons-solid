import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f00vp2buw.css';
import '../../css/b/bv2a3_bic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f00vp2buw"/><path class="bv2a3_bic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ambulance"} {...others} />);
}

export default Component;
