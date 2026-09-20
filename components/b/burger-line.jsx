import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwj8wlbxf.css';
import '../../css/r/r-qn66hjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rwj8wlbxf"/><path class="r-qn66hjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:burger-line"} {...others} />);
}

export default Component;
