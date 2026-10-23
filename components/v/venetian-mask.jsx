import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0ozadcmr.css';
import '../../css/m/mniaw2oga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s0ozadcmr"/><path class="mniaw2oga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:venetian-mask"} {...others} />);
}

export default Component;
