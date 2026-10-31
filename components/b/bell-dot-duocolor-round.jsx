import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zq7hq1-vu.css';
import '../../css/y/yondeb0iz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zq7hq1-vu"/><path class="yondeb0iz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bell-dot-duocolor-round"} {...others} />);
}

export default Component;
