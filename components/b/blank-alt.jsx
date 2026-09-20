import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/k/kd2kh4duv.css';
import '../../css/n/nv2ep8lvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="kd2kh4duv"/><path class="nv2ep8lvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:blank-alt"} {...others} />);
}

export default Component;
