import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ys0eq-b5g.css';
import '../../css/f/f_tftibfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ys0eq-b5g"/><path class="f_tftibfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vector-square-duocolor-round"} {...others} />);
}

export default Component;
