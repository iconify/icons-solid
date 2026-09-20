import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/zcol8lbmt.css';
import '../../css/n/n40fmrbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="zcol8lbmt"/><path class="n40fmrbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:calories"} {...others} />);
}

export default Component;
