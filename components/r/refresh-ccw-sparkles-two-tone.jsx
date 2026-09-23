import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3ce2sb5q.css';
import '../../css/r/rgyr606zo.css';
import '../../css/z/zk3p-0b1p.css';
import '../../css/p/pz9h9ac8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s3ce2sb5q"/><path class="rgyr606zo"/><path class="zk3p-0b1p"/><path class="pz9h9ac8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refresh-ccw-sparkles-two-tone"} {...others} />);
}

export default Component;
