import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnwf05bfp.css';
import '../../css/r/rkc3di_xf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hnwf05bfp"/><path class="rkc3di_xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:air-conditioning"} {...others} />);
}

export default Component;
