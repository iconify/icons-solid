import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx0j3m0za.css';
import '../../css/c/cpk8xwb9i.css';
import '../../css/x/xhdogwbyc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="mx0j3m0za"><path class="cpk8xwb9i"/><path class="xhdogwbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:screwdriver-bold"} {...others} />);
}

export default Component;
